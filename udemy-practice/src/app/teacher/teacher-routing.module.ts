import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { TeacherComponent } from '@app/teacher/teacher.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: TeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class TeacherRoutingModule {}
