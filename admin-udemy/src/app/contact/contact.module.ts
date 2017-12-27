import {
  NgModule
} from '@angular/core';

import {
  SharedModule
} from '@app/shared/shared.module';

export const COMMON_MODULES: any = [
  SharedModule
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: []
})
export class ContactModule { }
