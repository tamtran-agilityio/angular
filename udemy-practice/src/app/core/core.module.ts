import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from '@app/core/services/local-storage.service';
import { HttpWrapperService } from '@app/core/services/http-wrapper.service';
import { AppConfigService } from '@app/core/services/app-config.service';
import { LoggerService } from '@app/core/services/logger.service';

export const CORE_SERVICE: any[] = [
  AppConfigService,
  LocalStorageService,
  HttpWrapperService,
  LoggerService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...CORE_SERVICE
  ]
})
export class CoreModule { }
