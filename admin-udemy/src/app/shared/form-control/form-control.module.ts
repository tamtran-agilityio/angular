import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  CommonModule
} from '@angular/common';
import {
  ReactiveFormsModule
} from '@angular/forms';

import {
  MaterialModule
} from '@app/shared/material/material.module';
import {
  AddressComponent
} from '@app/shared/form-control/components/address/address.component';

export const COMMON_MODULES: any[] = [
  BrowserModule,
  ReactiveFormsModule,
  MaterialModule
];

export const FORM_CONTROL_COMPONENTS: any[] = [
  AddressComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  exports: [
    ...FORM_CONTROL_COMPONENTS
  ],
  declarations: [
    ...FORM_CONTROL_COMPONENTS
  ]
})

export class FormControlModule { }
