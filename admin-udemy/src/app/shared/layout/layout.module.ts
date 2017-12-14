import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  MainSidebarComponent,
  MainHeaderComponent,
  MainFooterComponent,
  MainBreadcrumbsComponent
} from '@app/shared/layout';

export const LAYOUT_COMPONENT: any = [
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  MainBreadcrumbsComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...LAYOUT_COMPONENT
  ]
})
export class LayoutModule { }
