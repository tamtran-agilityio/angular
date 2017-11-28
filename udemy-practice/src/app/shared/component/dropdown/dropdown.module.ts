import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { FormatLinkPipe } from '../../pipes/format-link.pipe';

export const COMMON_CORE: any[] = [
  RouterModule,
  CommonModule
];
export const DROPDOWN_COMPONENT: any[] = [
  DropdownItemComponent,
  DropdownComponent,
  FormatLinkPipe
];

export const DROPDOWN_PROVIDERS: any[] = [
];

@NgModule({
  imports: [
    ...COMMON_CORE
  ],
  declarations: [
    ...DROPDOWN_COMPONENT
  ],
  exports: [
    ...DROPDOWN_COMPONENT
  ],
  providers: [
    ...DROPDOWN_PROVIDERS
  ]
})
export class DropdownModule { }
