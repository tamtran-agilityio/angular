import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from '@app/post/components/post/post.component';
import { PostListComponent } from '@app/post/components/post-list/post-list.component';

export const POST_COMPONENT: any[] = [
  PostComponent,
  PostListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...POST_COMPONENT
  ]
})
export class PostModule { }
