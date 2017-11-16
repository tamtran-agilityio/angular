import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CarouselModule } from './carousel/carousel.module';
import { CourseService } from './service/course.service';

export const COURSES_COMPONENT: any[] = [
  CoursesListComponent,
  CoursesDetailComponent,
  CoursesItemComponent
];

export const COURSES_PROVIDERS: any[] = [
  CourseService
];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
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
