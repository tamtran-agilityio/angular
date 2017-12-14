import {
  NgModule
} from '@angular/core';

import {
  SharedModule
} from '@app/shared/shared.module';

export const COMMON_MODULE: any = [
  SharedModule
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: []
})
export class ContactModule { }
