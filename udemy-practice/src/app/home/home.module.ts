import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from '@app/home/components/home/home.component';
import { CoursesModule } from '@app/courses/courses.module';

export const COMMON_MODULE: any[] = [
  SharedModule,
  CoursesModule
];

export const HOME_COMPONENT: any[] = [
  HomeComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...HOME_COMPONENT
  ]
})
export class HomeModule { }
