import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { CustomDirective } from './custom.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    CustomDirective
  ],
  exports: [
    HighlightDirective,
    CustomDirective
  ]
})
export class SharedModule { }
