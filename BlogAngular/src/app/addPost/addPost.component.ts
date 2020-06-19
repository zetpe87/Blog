import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PostsService } from '../posts/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.scss'],
})
export class AddPostComponent implements OnInit {
  postGroup: FormGroup;
  // posts = [];
  showError: boolean = false;

  constructor(
    private postService: PostsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.postGroup = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
      text: new FormControl('', [
        Validators.maxLength(750),
        Validators.required,
      ]),
      like: new FormControl(false),
    });
  }

  ngOnInit() {}

  addPost() {
    if (this.postGroup.valid) {
      const formValue = this.postGroup.getRawValue();
      console.log(formValue);
      this.postService
        .savePost(formValue)
        .then((success) => {
          console.log(success);
          this._snackBar.open('Zapisano!', 'Super!', {
            duration: 4000,
          });
          this.router.navigate(['/']);
        })
        .catch((failure) => console.log(failure));
    } else {
      this.showError = true;
      this._snackBar.open('Formularz zawiera błędy.', 'OK', {
        duration: 4000,
      });
    }
  }

  titleErrorMessage() {
    if (this.postGroup.controls.title.hasError('required')) {
      return 'Zapomniano o tytule!';
    }
    return this.postGroup.controls.title.hasError('minlength')
      ? 'Tytuł jest za krótki!'
      : '';
  }

  textErrorMessage() {
    if (this.postGroup.controls.text.hasError('required')) {
      return 'Bez tekstu to nie ma sensu! Uzupełnij!';
    }
    return this.postGroup.controls.text.hasError('maxlength')
      ? 'Za dużo tekstu!'
      : '';
  }
}
