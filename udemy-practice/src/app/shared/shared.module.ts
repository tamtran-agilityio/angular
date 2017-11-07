import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { NavComponent } from './nav/nav.component';

export const COMMON_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  CommonModule
];

export const SHARED_COMPONENT: any[] = [
  MainFooterComponent,
  NavComponent
];

export const CORE_PROVIDERS: any[] = [

];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENT
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
    ...COMMON_MODULES,
    ...SHARED_COMPONENT
  ]
})
export class SharedModule { }
