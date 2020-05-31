import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    PostComponent
  ],
  declarations: [PostsComponent]
})
export class PostsModule {

}
