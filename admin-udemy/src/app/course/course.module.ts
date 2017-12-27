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

export const COMMON_MODULES: any = [
  SharedModule
];

export const COURSE_COMPONENTS: any[] = [
  CourseComponent,
  CourseListComponent,
  AddCourseComponent
];

export const COURSE_PROVIDERS: any[] = [
  CourseService,
  CourseHelperService
];

export const ENTRY_COMPONENTS: any[] = [
  AddCourseComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...COURSE_COMPONENTS
  ],
  providers: [
    ...COURSE_PROVIDERS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    ...COURSE_COMPONENTS
  ]
})
export class CourseModule { }
