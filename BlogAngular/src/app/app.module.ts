import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config/config.service';
import { PostsComponent } from './posts/posts.component';
import { OopsComponent } from './oops/oops.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPostComponent } from './addPost/addPost.component';
import { LikeComponent } from './posts/post/like/like.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './posts/post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PostDetailsComponent } from './posts/postDetails/postDetails.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    OopsComponent,
    AddPostComponent,
    LikeComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
