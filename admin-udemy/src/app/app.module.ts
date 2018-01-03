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
  CategoryModule
} from '@app/category/category.module';
import {
  UserModule
} from '@app/user/user.module';
import {
  CoreModule
} from '@app/core/core.module';
import {
  AppRoutingModule
} from '@app/app-routing.module';
import {
  CourseModule
} from '@app/course/course.module';


export const COMMON_MODULES: any[] = [
  BrowserAnimationsModule,
  BrowserModule,
  RouterModule,
  CoreModule,
  SharedModule,
  DashboardModule,
  UserModule,
  CourseModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...COMMON_MODULES
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
