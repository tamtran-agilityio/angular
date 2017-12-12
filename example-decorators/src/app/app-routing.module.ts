import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES as homeRouting } from '@app/home/home-routing.module';
import { ROUTES as aboutRouting } from '@app/about/about-routing.module';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...homeRouting
    ]
  },
  {
    path: 'about',
    children: [
      ...aboutRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
