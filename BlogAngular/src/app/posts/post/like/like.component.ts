import { Component, OnInit, Input } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { Post } from '../../post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  likeButtonClick() {
    this.post.like = !this.post.like;
    this.postService.updatePost(this.post);
  }

  constructor(private postService: PostsService) {}

  ngOnInit() {}
  @Input() post: Post;
}
