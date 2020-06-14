import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './post/like/like.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostComponent, LikeComponent],
})
export class PostsModule {}
