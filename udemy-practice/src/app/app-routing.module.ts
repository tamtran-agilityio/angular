import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ROUTES as homeRouting } from './home/home-routing.module';
import { ROUTES as courseRouting } from './courses/courses-routing.module';
import { ROUTES as collectionRouting } from './collection/collection-routing.module';
import { ROUTES as myCoursesRouting } from './my-courses/mycourses-routing.module';
import { ROUTES as teacherRouting } from './teacher/teacher-routing.module';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...homeRouting
    ]
  },
  {
    path: 'courses',
    children: [
      ...courseRouting
    ]
  },
  {
    path: 'home',
    children: [
      ...myCoursesRouting
    ]
  },
  {
    path: 'teaching',
    children: [
      ...teacherRouting
    ]
  },
  {
    path: 'collection',
    children: [
      ...collectionRouting
    ]
  },
  {
    path: 'about',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
