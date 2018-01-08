import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppRouterModule } from '@app/app-routing.module';
import { TodoModule } from '@app/todo/todo.module';
import { todoReducer } from '@app/todo/store/todo.reducer';
import { TodoEffects } from '@app/todo/store/todo.effects';

export const COMMON_MODULE: any[] = [
  BrowserModule,
  RouterModule,
  HttpModule,
  CommonModule,
  CoreModule,
  TodoModule,
  AppRouterModule,
  StoreModule.forRoot(todoReducer),
  EffectsModule.forRoot([]),
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...COMMON_MODULE
  ],
  providers: [
    TodoEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
