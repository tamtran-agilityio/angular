import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatInputModule
} from '@angular/material/input';

export const MATERIAL_MODULES: any[] = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES
  ],
  declarations: [],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
