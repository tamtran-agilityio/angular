import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesDiscoverComponent } from './courses-discover/courses-discover.component';
import { CarouselModule } from './carousel/carousel.module';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from './service/course.service';

export const COURSES_COMPONENT: any[] = [
  CoursesListComponent,
  CoursesDetailComponent,
  CoursesItemComponent,
  CoursesDiscoverComponent
];

export const COURSES_PROVIDERS: any[] = [
  CourseService
];

@NgModule({
  imports: [
    SharedModule,
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
