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

export const COMMON_MODULES: any[] = [
  SharedModule
];
export const DASHBOARD_COMPONENTS: any[] = [
  DashboardComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...DASHBOARD_COMPONENTS
  ],
  exports: [
    ...DASHBOARD_COMPONENTS
  ]
})
export class DashboardModule { }
