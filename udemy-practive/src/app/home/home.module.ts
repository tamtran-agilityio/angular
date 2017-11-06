import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home-routing.module';

export const HOME_COMPONENT: any[] = [
  HomeComponent
];

@NgModule({
  imports: [],
  declarations: [
    ...HOME_COMPONENT
  ]
})
export class HomeModule { }
