import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { PostService } from '../post/post.service';

@Component({
    selector: 'search-post',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchPost implements OnInit {
    items: Observable<Array<string>>;
    term = new FormControl();

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.items = null;
    }
}
