import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { HomeComponent } from '@app/home/components/home/home.component';
import { PrimarylayoutComponent } from '@app/shared/components/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({

})

export class HomeRoutingModule {}
