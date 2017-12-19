import {
  Injectable,
  Inject
} from '@angular/core';
import {
  Response,
  Http,
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  URLSearchParams
} from '@angular/http';

import {
  Observable
} from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class ClientService {

  private rootUrl = '';
  public constructor(
    @Inject(Http) protected http: Http
  ) { }

  /**
   * Handle get header default wapper service
   */
  public getDefaultHeaders() {
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return headers;
  }

  /**
   * Handle get default default wapper service
   */
  public getDefaultOptions(options?: RequestOptionsArgs) {
    const opts = new RequestOptions(),
        search = new URLSearchParams();

    opts.headers = this.getDefaultHeaders();

    if (options && options.headers) {
      options.headers.forEach((value: string[], key: string) => {
        _.each(value, item => {
          search.append(key, item);
        });
      });
      opts.search = search;
    }

    return opts;
  }

  /**
   * Performs a request with `get` http method.
   * @param url      An url which is used in a http request.
   * @param options  A request options arguments.
   * @returns        It returns a cold Observable which emits one value (in JavaScript format) from the request.
   */
  public get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    const urlQuery = this.rootUrl + url;

    return this.http.get(urlQuery, this.getDefaultOptions(options))
               .map(this.extractData)
               .catch(this.handleErrorMessage);
  }

  /**
   * Performs a request with `post` http method.
   * @param url      An url which is used in a http request.
   * @param options  A request options arguments.
   * @returns        It returns a cold Observable which emits one value (in JavaScript format) from the request.
   */
  public post<T>(url: string, body: any, opts?: RequestOptionsArgs): Observable<T> {
    const urlQuery = this.rootUrl + url,
        requestOptions = this.getDefaultOptions(opts);

    return this.http.post(urlQuery, body, requestOptions)
               .map(res => {
                 return res;
               })
               .catch(this.handleErrorMessage);
  }

  /**
   * Handle extract data
   * @param res The res data
   */
  public extractData(res: Response) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }

  /**
   * Handle error message
   * @param error The error messeger
   */
  public handleErrorMessage(error: any) {
    const errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}
