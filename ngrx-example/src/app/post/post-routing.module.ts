import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '@app/post/components/posts/posts.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
