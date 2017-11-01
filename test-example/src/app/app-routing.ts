import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerInlineComponent } from './banner-inline/banner-inline.component';
import { ROUTES as userRouting } from './user/user-routing';

export const routes: Routes = [
  {
    path: '',
    component: BannerInlineComponent
  },
  {
    path: 'user',
    children: [
      ...userRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
