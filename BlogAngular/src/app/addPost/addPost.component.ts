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
    if (localStorage.getItem("posts")) {
      this.posts = JSON.parse(localStorage.getItem("posts"))
    }
    this.posts.push(post)
    localStorage.setItem("posts", JSON.stringify(this.posts))
    alert("Post dodano!")
  }
}
