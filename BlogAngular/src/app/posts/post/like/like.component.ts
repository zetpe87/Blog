import { Component, OnInit, Input } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { Post } from '../../post';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  likeButtonClick() {
    this.post.like = !this.post.like;
  }

  // dislikeButtonClick() {
  //   this.numberOfLikes--;
  //   console.log(this.postId);
  // }
  constructor() {}

  ngOnInit() {}
  @Input() post: Post;
}
