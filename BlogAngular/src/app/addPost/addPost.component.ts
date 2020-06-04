import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }
  posts = [];
  ngOnInit() {
  }

  addPost(title, content) {
    let post = { "title": title.value, "content": content.value };
    alert("Post dodano!")
  }
}
