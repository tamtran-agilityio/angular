import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ROUTES as homeRouting } from './home/home-routing.module';
import { ROUTES as courseRouting } from './courses/courses-routing.module';
import { ROUTES as collectionRouting } from './collection/collection-routing.module';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    children: [
      ...homeRouting
    ]
  },
  {
    path: ':name',
    children: [
      ...courseRouting
    ]
  },
  {
    path: 'collection/:name',
    children: [
      ...collectionRouting
    ]
  },
  {
    path: 'about',
    component: AboutComponent
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
