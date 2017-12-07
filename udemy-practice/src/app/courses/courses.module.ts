import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { CourseComponent } from '@app/courses/components/course/course.component';
import { CourseService } from '@app/courses/services/course.service';
import { CourseCarouselComponent } from '@app/courses/components/course-carousel/course-carousel.component';
import { SharedModule } from '@app/shared/shared.module';
import { TitleCarouselPipe } from '@app/courses/pipes/title-carousel.pipe';
import { CoursePopularComponent } from './components/course-popular/course-popular.component';
import { CourseStrategyComponent } from './components/course-strategy/course-strategy.component';

export const COMMON_MODULE: any[] = [
  SharedModule
];

export const COURSES_COMPONENT: any[] = [
  CourseComponent,
  CourseCarouselComponent,
  CoursePopularComponent,
  CourseStrategyComponent,
  TitleCarouselPipe,
];

export const COURSES_PROVIDERS: any[] = [
  CourseService
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  exports: [
    ...COURSES_COMPONENT
  ],
  declarations: [
    ...COURSES_COMPONENT
  ],
  providers: [
    ...COURSES_PROVIDERS
  ]
})
export class CoursesModule { }
