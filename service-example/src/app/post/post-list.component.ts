import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'post-list',
    templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit {
    private posts: Post[] = [];
    private errorMessage:any = '';

    constructor(private postService: PostService,
                private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getPosts();
    }

    detelePost(id) {
        this.postService.deletePost(id)
            .subscribe(data => {
                this.cd.markForCheck();
            });
    }

    getPosts() {
        this.postService.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
    }
}
