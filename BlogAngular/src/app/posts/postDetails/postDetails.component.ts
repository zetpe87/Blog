import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostDialogComponent } from './deletePostDialog/deletePostDialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-postDetails',
  templateUrl: './postDetails.component.html',
  styleUrls: ['./postDetails.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post = {
    title: '',
    text: '',
    like: false,
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostsService,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('PostDetails');
    // skoro chcemy :id ----> fooBar/25 ---> {id: 25} -> Angular mapuje nam wybrany element
    const postId = this.activateRoute.snapshot.params.id;
    console.log(postId);
    this.postService
      .fetchPost(postId)
      .then((post: Post) => {
        console.log(post);
        this.post = post;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteButtonClick() {
    const dialogRef = this._matDialog.open(DeletePostDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.postService.deletePost(this.post.id);
        this._snackBar.open('Usunięto!', 'OK!', {
          duration: 4000,
        });
        this.router.navigate(['/']);
      }
    });
  }
}
