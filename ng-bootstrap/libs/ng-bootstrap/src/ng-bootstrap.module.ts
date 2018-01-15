import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const COMMON_MODULES: any[] = [
  CommonModule,
  NgbModule
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ]
})
export class NgBootstrapModule {
}
