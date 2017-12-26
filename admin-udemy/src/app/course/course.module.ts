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
import {
  AddCourseComponent
} from './components/add-course/add-course.component';
import {
  CourseHelperService
} from '@app/course/services/course-helper.service';

export const COMMON_MODULE: any = [
  SharedModule
];

export const COURSE_COMPONENT: any[] = [
  CourseComponent,
  CourseListComponent,
  AddCourseComponent
];

export const COURSE_PROVIDERS: any[] = [
  CourseService,
  CourseHelperService
];

export const ENTRY_COMPONENT: any[] = [
  AddCourseComponent
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
  entryComponents: [
    ...ENTRY_COMPONENT
  ],
  exports: [
    ...COURSE_COMPONENT
  ]
})
export class CourseModule { }
