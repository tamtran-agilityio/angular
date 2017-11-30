import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './component/my-courses/my-courses.component';
import { CoursesModule } from '@app/courses/courses.module';
import { MyCoursesRouting } from '@app/my-courses/mycourses-routing.module';
import { MyCollectionsComponent } from './component/my-collections/my-collections.component';
import { MyWishlistComponent } from './component/my-wishlist/my-wishlist.component';
import { MyArchivedComponent } from './component/my-archived/my-archived.component';
import { MyLearnComponent } from './component/my-learn/my-learn.component';

export const COMMON_MODULE: any[] = [
  CommonModule,
  CoursesModule,
  MyCoursesRouting
];

export const MYCOURSE_COMPONENT: any[] = [
  MyCoursesComponent,
  MyWishlistComponent,
  MyArchivedComponent,
  MyLearnComponent,
  MyCollectionsComponent
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
