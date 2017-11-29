import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './component/my-courses/my-courses.component';
import { CoursesModule } from '@app/courses/courses.module';

export const COMMON_MODULE: any[] = [
  CommonModule,
  CoursesModule
];

export const MYCOURSE_COMPONENT: any[] = [
  MyCoursesComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...MYCOURSE_COMPONENT
  ]
})
export class MyCoursesModule { }
