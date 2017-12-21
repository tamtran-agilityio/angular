import {
  NgModule
} from '@angular/core';

import {
  SharedModule
} from '@app/shared/shared.module';

export const COMMON_MODULE: any = [
  SharedModule
];

export const COURSE_COMPONENT: any[] = [

];

export const COURSE_PROVIDERS: any[] = [

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
