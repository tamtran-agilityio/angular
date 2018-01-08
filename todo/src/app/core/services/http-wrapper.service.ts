import {
  Injectable
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

import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Injectable()
export class HttpWrapperService {

  private rootUrl = '';
  constructor(
    private http: Http,
    private appConfig: AppConfigService
  ) {
    this.rootUrl = this.appConfig.API.API_ROOT;
  }

  /**
   * Handle get header default wapper service
   */
  getDefaultHeaders() {
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return headers;
  }

  /**
   * Handle get default default wapper service
   */
  getDefaultOptions(options?: RequestOptionsArgs) {
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
  get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
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
  post<T>(url: string, body: any, opts?: RequestOptionsArgs): Observable<T> {
    const urlQuery = this.rootUrl + url,
        requestOptions = this.getDefaultOptions(opts);

    return this.http.post(urlQuery, body, requestOptions)
               .map(res => {
                 return res;
               })
               .catch(this.handleErrorMessage);
  }

  /**
   * Performs a request with `patchs` http method.
   * @param url      An url which is used in a http request.
   * @param options  A request options arguments.
   * @returns        It returns a cold Observable which emits one value (in JavaScript format) from the request.
   */
  patch<T>(url: string, data: Object, opts?: RequestOptionsArgs): Observable<T> {
    const urlQuery = this.rootUrl + url,
        requestOptions = this.getDefaultOptions(opts);

    return this.http.patch(urlQuery, data, requestOptions)
                    .map(this.extractData)
                    .catch(this.handleErrorMessage);
  }

  /**
   * Performs a request with `delete` http method.
   * @param url      An url which is used in a http request.
   * @param options  A request options arguments.
   * @returns        It returns a cold Observable which emits one value (in JavaScript format) from the request.
   */
  delete<T>(url: string, opts?: RequestOptionsArgs): Observable<T> {
    const urlQuery = this.rootUrl + url,
        requestOptions = this.getDefaultOptions(opts);

    return this.http.delete(urlQuery, requestOptions)
                    .map(this.extractData)
                    .catch(this.handleErrorMessage);
  }

  /**
   * Handle extract data
   * @param res The res data
   */
  extractData(res: Response) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }

  /**
   * Handle error message
   * @param error The error messeger
   */
  handleErrorMessage(error: any) {
    const errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}