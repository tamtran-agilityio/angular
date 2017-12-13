import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from '@app/post/components/post/post.component';
import { PostListComponent } from '@app/post/components/post-list/post-list.component';
import { PostService } from '@app/post/services/post.service';

export const POST_COMPONENT: any[] = [
  PostComponent,
  PostListComponent
];

export const POST_PROVIDERS: any[] = [
  PostService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...POST_COMPONENT
  ],
  providers: [
    ...POST_PROVIDERS
  ]
})
export class PostModule { }
