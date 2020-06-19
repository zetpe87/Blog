import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Promise<Object>;
  query: string = '';
  value = '';

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  search(query) {
    //1. aktualizujemy wartość "query" (wyszukiwana fraza)
    this.query = query;
    this.updateList();
  }

  updateList() {
    this.posts = this.postService.fetchPosts(this.query);
  }

  //Czyszczenie pola wyszukiwania i powrót do całej listy postów
  clear() {
    this.value = '';
    this.query = '';
    this.updateList();
  }
}
