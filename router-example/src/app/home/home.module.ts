import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

export const HOME_COMPONENTS: any[] = [
    HomeComponent
];

export const HOME_PROVIDERS: any[] = [

]
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
      ...HOME_COMPONENTS
  ],
  providers: [
      ...HOME_PROVIDERS
  ],
  exports: [
      ...HOME_COMPONENTS
  ]
})
export class HomeModule { }
