import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

export const COMMON_MODULE: any[] = [
  CoreModule,
  SharedModule
];

@NgModule({
  imports: [
    COMMON_MODULE
  ],
  declarations: []
})
export class CategoriesModule { }
