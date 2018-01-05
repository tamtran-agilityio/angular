import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostModule } from '@app/post/post.module';
import { StoreModule, Store } from '@ngrx/store';
import { rootReducer } from '@app/app.reducer';
import { CoreModule } from '@app/core/core.module';
import { HttpModule } from '@angular/http';

export const COMMON_MODULE: any[] = [
  BrowserModule,
  HttpModule,
  CoreModule,
  PostModule,
  AppRoutingModule,
  StoreModule.forRoot(rootReducer)
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
