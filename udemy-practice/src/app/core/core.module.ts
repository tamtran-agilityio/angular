import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './service/logger.service';
import { HttpWrapperService } from './service/http-wrapper.service';
import { AppConfigService } from './service/app-config.service';
import { ValidationService } from './service/validation.service';

export const CORE_PROVIDERS: any[] = [
  AppConfigService,
  LoggerService,
  HttpWrapperService,
  ValidationService
];

export const CORE_MODULES: any[] = [
  CommonModule
];

export const PIPE: any[] = [

];

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
  ]
})
export class CoreModule { }
