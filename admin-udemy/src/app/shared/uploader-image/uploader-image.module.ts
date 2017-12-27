import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  UploaderImageComponent
} from './components/uploader-image/uploader-image.component';

export const COMMON_MODULES: any[] = [
  CommonModule
];

export const UPLOADER_IMAGE_COMPONENTS: any[] = [
  UploaderImageComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...UPLOADER_IMAGE_COMPONENTS
  ],
  exports: [
    ...UPLOADER_IMAGE_COMPONENTS
  ]
})
export class UploaderImageModule { }
