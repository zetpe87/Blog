import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';

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
    private postService: PostsService
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
}
