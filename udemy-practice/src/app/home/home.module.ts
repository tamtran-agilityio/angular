import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from '@app/home/components/home/home.component';
import { CoursesModule } from '@app/courses/courses.module';
import { IntroduceWorkComponent } from './components/introduce-work/introduce-work.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const COMMON_MODULE: any[] = [
  SharedModule,
  CoursesModule
];

export const HOME_COMPONENT: any[] = [
  HomeComponent,
  IntroduceWorkComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...HOME_COMPONENT,
    BannerComponent,
    ContactUsComponent
  ]
})
export class HomeModule { }
