import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';
import {
  RouterModule
} from '@angular/router';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

import {
  MaterialModule
} from '@app/shared/material/material.module';

import {
  LayoutModule
} from '@app/shared/layout/layout.module';
import {
  UploaderImageModule
} from '@app/shared/uploader-image/uploader-image.module';
import {
  ControlMessageModule
} from '@app/shared/control-message/control-message.module';
import {
  FormControlModule
} from '@app/shared/form-control/form-control.module';

export const COMMON_MODULE: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  RouterModule,
  FlexLayoutModule,
  MaterialModule,
  LayoutModule,
  UploaderImageModule,
  ControlMessageModule,
  FormControlModule
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [],
  exports: [
    ...COMMON_MODULE
  ]
})
export class SharedModule { }
