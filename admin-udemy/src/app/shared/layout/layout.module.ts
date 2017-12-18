import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';

import {
  MainSidebarComponent,
  MainHeaderComponent,
  MainFooterComponent,
  MainBreadcrumbsComponent
} from '@app/shared/layout';
import {
  MaterialModule
} from '@app/shared/material/material.module';
import {
  PrimaryLayoutComponent
} from '@app/shared/layout/components/primary-layout/primary-layout.component';

export const COMMON_MODULE: any[]= [
  CommonModule,
  RouterModule,
  MaterialModule
]
export const LAYOUT_COMPONENT: any = [
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  MainBreadcrumbsComponent,
  PrimaryLayoutComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...LAYOUT_COMPONENT
  ],
  exports: [
    ...LAYOUT_COMPONENT
  ]
})
export class LayoutModule { }
