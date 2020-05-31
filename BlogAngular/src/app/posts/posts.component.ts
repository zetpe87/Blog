import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .then(posts => {
        this.posts = posts;
        console.log(posts);

      })
  }

}
