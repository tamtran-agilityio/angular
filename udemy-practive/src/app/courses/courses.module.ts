import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CoursesDetailComponent, CoursesItemComponent]
})
export class CoursesModule { }
