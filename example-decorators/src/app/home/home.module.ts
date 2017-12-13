import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@app/home/components/home-page/home-page.component';
import { PostModule } from '@app/post/post.module';
import { PostService } from '@app/post/services/post.service';

export const HOME_COMPONENT: any[] = [
  HomePageComponent
];

@NgModule({
  imports: [
    CommonModule,
    PostModule
  ],
  declarations: [
    ...HOME_COMPONENT
  ]
})
export class HomeModule { }
