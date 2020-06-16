import { Injectable } from '@angular/core';
import { ConfigService, Config } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  [x: string]: any;

  // savePost(post: Post): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
  promiseConfig: Promise<Config>;

  constructor(private configsService: ConfigService, public http: HttpClient) {
    this.promiseConfig = configsService.getConfig().toPromise();
  }

  getPosts() {
    return this.promiseConfig.then((value) => {
      return this.http.get(value.postsUrl).toPromise();
    });
  }

  savePost(post: Post) {
    return this.promiseConfig.then((value) => {
      return this.http.post(value.postsUrl, post).toPromise();
    });
  }

  fetchPost(postId) {
    return this.promiseConfig.then((value) => {
      return this.http
        .get(`${value.postsUrl}/${postId}`)
        .toPromise()
        .then()
        .catch();
    });
  }

  deletePost(postId: number) {
    return this.promiseConfig.then((value) => {
      return this.http
        .delete(`${value.postsUrl}/${postId}`)
        .toPromise()
        .then()
        .catch();
    });
  }
}
