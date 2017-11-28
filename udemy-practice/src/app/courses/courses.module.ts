import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CoursesDetailComponent } from './component/courses-detail/courses-detail.component';
import { CoursesItemComponent } from './component/courses-item/courses-item.component';
import { CoursesDiscoverComponent } from './component/courses-discover/courses-discover.component';
import { CarouselModule } from '../carousel/carousel.module';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from './service/course.service';
import { CoursesIntroductionComponent } from './component/courses-introduction/courses-introduction.component';
import { CoursesWhatLearnComponent } from './component/courses-what-learn/courses-what-learn.component';
import { CousesCompareComponent } from './component/couses-compare/couses-compare.component';
import { CoursesAccordionComponent } from './component/courses-accordion/courses-accordion.component';
import { CoursesAboutInstructorComponent } from './component/courses-about-instructor/courses-about-instructor.component';
import { CoursesEnrollComponent } from './component/courses-enroll/courses-enroll.component';
import { CoreModule } from '@app/core/core.module';
import { MyCoursesComponent } from '@app/courses/component/my-courses/my-courses.component';

export const COURSES_COMPONENT: any[] = [
  CoursesListComponent,
  CoursesDetailComponent,
  CoursesItemComponent,
  CoursesDiscoverComponent,
  CoursesIntroductionComponent,
  CoursesWhatLearnComponent,
  CousesCompareComponent,
  CoursesAccordionComponent,
  CoursesAboutInstructorComponent,
  CoursesEnrollComponent,
  MyCoursesComponent
];

export const COURSES_COMMON: any[] = [
  CoreModule,
  SharedModule,
  CarouselModule
];

export const COURSES_PROVIDERS: any[] = [
  CourseService
];

@NgModule({
  imports: [
    ...COURSES_COMMON
  ],
  declarations: [
    ...COURSES_COMPONENT
  ],
  exports: [
    ...COURSES_COMPONENT
  ],
  providers: [
    ...COURSES_PROVIDERS
  ]
})
export class CoursesModule { }
