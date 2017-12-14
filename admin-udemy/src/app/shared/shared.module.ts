import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    NgModule,
    FormsModule,
    HttpModule,
    RouterModule
  ]
})
export class SharedModule { }
