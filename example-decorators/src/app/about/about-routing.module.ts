import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }
