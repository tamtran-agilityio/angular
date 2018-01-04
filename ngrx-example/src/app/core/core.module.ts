import { NgModule } from '@angular/core';
import { HttpWrapperService } from '@app/core/services/http-wrapper.service';

export const CORE_PROVIDERS: any[] = [
  HttpWrapperService
];

@NgModule({
  imports: [],
  exports: [],
  providers: [
    ...CORE_PROVIDERS
  ]
})

export class CoreModule { }
