import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@app/home/components/home-page/home-page.component';

export const HOME_COMPONENT: any[] = [
  HomePageComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...HOME_COMPONENT
  ]
})
export class HomeModule { }
