import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ClientService } from '@app/core/decorators/http-wrapper/services/client.service';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    ClientService
  ]
})
export class HttpWrapperModule { }
