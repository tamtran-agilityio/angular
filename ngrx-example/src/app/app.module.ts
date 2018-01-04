import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const COMMON_MODULE: any[] = [
  BrowserModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
