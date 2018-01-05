import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '@app/post/effects/post.effect';
import { PostService } from '@app/post/services/post.service';
import { PostAction } from '@app/post/actions/post.action';

export const COMMON_MODULE: any[] = [
  CommonModule,
  RouterModule,
  EffectsModule.forRoot([PostEffects])
];

export const POST_COMPONENTS: any[] = [
  PostsComponent,
  PostItemComponent
];

export const POST_SERVICES: any[] = [
  PostService,
  PostAction
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...POST_COMPONENTS
  ],
  providers: [
    ...POST_SERVICES
  ],
  exports: [
    ...POST_COMPONENTS
  ]
})
export class PostModule { }
