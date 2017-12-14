import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  SharedModule
} from '@app/shared/shared.module';

export const COMMON_MODULE: any[] = [
  BrowserModule,
  SharedModule
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
