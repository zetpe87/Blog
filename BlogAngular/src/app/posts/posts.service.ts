import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private configsService: ConfigService, public http: HttpClient) {
    const config = configsService.getConfig();
    const sub = config.subscribe((value) => {
      console.log(value)
    });
  }

  getPosts() {
    const postsUrl = this.configsService.getConfig()
      .toPromise()
      .then((config) => {
        return this.http.get(config.postsUrl).toPromise();
      })
  }
}
