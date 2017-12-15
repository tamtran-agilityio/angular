import {
  BrowserModule
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

import {
  AppComponent
} from './app.component';
import {
  SharedModule
} from '@app/shared/shared.module';
import {
  DashboardModule
} from '@app/dashboard/dashboard.module';
import {
  AppRoutingModule
} from '@app/app-routing.module';

export const COMMON_MODULE: any[] = [
  BrowserAnimationsModule,
  BrowserModule,
  RouterModule,
  SharedModule,
  DashboardModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...COMMON_MODULE
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
