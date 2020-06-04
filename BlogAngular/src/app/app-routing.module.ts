import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OopsComponent } from './oops/oops.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './addPost/addPost.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'AddPost', component: AddPostComponent },
  { path: '**', component: OopsComponent } //trafienie na niezdefiniowaną ścieżkę
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
