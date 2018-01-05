import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES as postRouting } from '@app/post/post-routing.module';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...postRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
