import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Post } from './post';

@Injectable()

export class PostService {
    constructor(private http: Http) {

    }

    getDefaultHeaders() {
        let headers: Headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getDefaultOptions() {
        let options: RequestOptions = new RequestOptions();

        options.headers = this.getDefaultHeaders();
        return options;
    }

    getData(): Observable<Post[]>  {
        return Observable.create(res => {
            this.http.get('http://localhost:8000/posts/', this.getDefaultOptions())
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe((post: Post[]) => {
                res.next(post);
            });
        });
    }

    deletePost(id: number) {

        return Observable.create(res => {
            this.http.delete(`http://localhost:8000/posts/${id}`, this.getDefaultOptions())
            .subscribe()
        });
    }

    private extractData(res: Response) {
        let body = res.json();

        return body || [];
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :

        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

}
