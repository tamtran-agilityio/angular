import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  SharedModule
} from '@app/shared/shared.module';
import {
  DashboardComponent
} from '@app/dashboard/components/dashboard/dashboard.component';

export const COMMON_MODULE: any[] = [
  SharedModule
];
export const DASHBOARD_COMPONENT: any[] = [
  DashboardComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...DASHBOARD_COMPONENT
  ],
  exports: [
    ...DASHBOARD_COMPONENT
  ]
})
export class DashboardModule { }
