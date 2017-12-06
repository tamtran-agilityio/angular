import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ROUTES as homeRouting } from '@app/home/home-routing.module';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...homeRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
