import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PostsService } from '../posts/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css'],
})
export class AddPostComponent implements OnInit {
  postGroup: FormGroup;
  posts = [];
  showError: boolean = false;

  constructor(
    private postService: PostsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.postGroup = new FormGroup({
      title: new FormControl('', Validators.minLength(5)),
      text: new FormControl('', Validators.maxLength(750)),
    });
  }

  ngOnInit() {}

  addPost() {
    if (this.postGroup.valid) {
      const formValue = this.postGroup.getRawValue();
      console.log(formValue);
      this.postService
        .savePost(formValue)
        .then((success) => {
          console.log(success);
          this._snackBar.open('Zapisano!', 'Super!', {
            duration: 4000,
          });
          this.router.navigate(['/']);
        })
        .catch((failure) => console.log(failure));
    } else {
      this.showError = true;
      console.log('Formularz zawiera błędy.');
    }

    // let post = { "title": title.value, "content": content.value };
    // if (localStorage.getItem("posts")) {
    //   this.posts = JSON.parse(localStorage.getItem("posts"))
    // }
    // this.posts.push(post)
    // localStorage.setItem("posts", JSON.stringify(this.posts))
    // title.value = "";
    // content.value = "";
    // alert("Post dodano!")
  }
}
