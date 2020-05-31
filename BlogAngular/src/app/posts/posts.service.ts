import { Injectable } from '@angular/core';
import { ConfigService, Config } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  promiseConfig: Promise<Config>;

  constructor(private configsService: ConfigService, public http: HttpClient) {
    this.promiseConfig = configsService.getConfig().toPromise();
  }

  getPosts() {
    return this.promiseConfig.then(value => {
      return this.http.get(value.postsUrl).toPromise();
    });
  }
}
