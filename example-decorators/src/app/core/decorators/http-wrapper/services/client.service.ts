import { Injectable, Inject } from '@angular/core';
import {
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  URLSearchParams,
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';


@Injectable()

export class ClientService {

  public withCredentials: boolean = false;

  public constructor(@Inject(Http) protected http: Http) {}

  protected getBaseUrl(): string {
    return undefined;
  }

  protected getDefaultHeaders(): Object {
    return null;
  }

  /**
  * Request Interceptor
  *
  * @method requestInterceptor
  * @param {Request} req - request object
  */
  protected requestInterceptor(req: Request): Observable<Request> {
    return Observable.of(req);
  }

  /**
  * Response Interceptor
  *
  * @method responseInterceptor
  * @param {Response} res - response object
  * @returns {Response} res - transformed response object
  */
  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }
}
