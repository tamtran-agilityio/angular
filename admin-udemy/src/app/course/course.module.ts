import {
  NgModule
} from '@angular/core';

import {
  SharedModule
} from '@app/shared/shared.module';
import {
  CourseComponent
} from './components/course/course.component';
import {
  CourseListComponent
} from './components/course-list/course-list.component';
import {
  CourseService
} from '@app/course/services/course.service';

export const COMMON_MODULE: any = [
  SharedModule
];

export const COURSE_COMPONENT: any[] = [
  CourseComponent,
  CourseListComponent
];

export const COURSE_PROVIDERS: any[] = [
  CourseService
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...COURSE_COMPONENT
  ],
  providers: [
    ...COURSE_PROVIDERS
  ],
  exports: [
    ...COURSE_COMPONENT
  ]
})
export class CourseModule { }
