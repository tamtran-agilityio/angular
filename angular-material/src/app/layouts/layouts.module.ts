import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CommonLayoutComponent,
  HeaderComponent
} from './components';
import {
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    CommonLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CommonLayoutComponent
  ]
})
export class LayoutsModule { }
