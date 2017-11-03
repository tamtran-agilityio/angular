import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES as authRouting} from './auth/auth-routing';

export const ROUTER: Routes = [
  { path: '', component: AppComponent },
  { path: 'login',
    children: [
      ...authRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTER, { useHash: false })],
  exports: [RouterModule]
})

export class AppRouting {}
