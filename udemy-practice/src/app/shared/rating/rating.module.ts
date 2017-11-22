import { Component, OnInit, Input, Output, EventEmitter, HostListener, forwardRef, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';

export const COMMON_MODULE: any[] = [
  CommonModule
];

export const RATING_COMPONENT: any[] = [
  RatingComponent
];

export const RATING_PROVIDERS: any[] = [
  { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true },
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => RatingComponent), multi: true },
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...RATING_COMPONENT
  ],
  providers: [
    // ...RATING_PROVIDERS
  ],
  exports: [
    ...RATING_COMPONENT
  ],
})
export class RatingModule { }
