import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css'],
})
export class AddPostComponent implements OnInit {
  postGroup: FormGroup;
  posts = [];
  showError: boolean = false;
  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  addPost() {
    if (this.postGroup.valid) {
      const formValue = this.postGroup.getRawValue();
      console.log(formValue);
      this.postService
        .savePost(formValue)
        .then((success) => console.log(success))
        .catch((failure) => console.log(failure));
    } else {
      this.showError = true;
      console.log('Formularz zawiera błędy.');
    }

    // let post = { "title": title.value, "content": content.value };
    // if (localStorage.getItem("posts")) {
    //   this.posts = JSON.parse(localStorage.getItem("posts"))
    // }
    // this.posts.push(post)
    // localStorage.setItem("posts", JSON.stringify(this.posts))
    // title.value = "";
    // content.value = "";
    // alert("Post dodano!")
  }
}
