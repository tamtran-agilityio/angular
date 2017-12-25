import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  UploaderImageComponent
} from './components/uploader-image/uploader-image.component';

export const COMMON_MODULE: any[] = [
  CommonModule
];

export const UPLOADER_IMAGE_COMPONENT: any[] = [
  UploaderImageComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...UPLOADER_IMAGE_COMPONENT
  ],
  exports: [
    ...UPLOADER_IMAGE_COMPONENT
  ]
})
export class UploaderImageModule { }
