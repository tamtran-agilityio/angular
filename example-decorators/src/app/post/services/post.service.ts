import { Injectable } from '@angular/core';
import { HttpWrapper } from '@app/core/decorators/http-wrapper';

@Injectable()
@HttpWrapper({
  getBaseUrl: 'http://localhost:8000/'
})
export class PostService {

  constructor() { }

}
