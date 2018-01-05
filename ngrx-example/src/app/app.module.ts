import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostModule } from '@app/post/post.module';
import { StoreModule } from '@ngrx/store/src/store_module';
import { rootReducer } from '@app/app.reducer';
export const COMMON_MODULE: any[] = [
  BrowserModule,
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
