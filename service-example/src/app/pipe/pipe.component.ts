import { Component } from '@angular/core';
import { DatePipe, PercentPipe } from '@angular/common';

@Component({
    selector: 'pipe',
    templateUrl: './pipe.component.html'
})
export class PipeComponent {
    title: string = 'Angular 2 pipes Example' ;
    toDate: Date = new Date();
    msg: string= 'Welcome to Angular 2';
    num: number= 9542.14554;
    per: number= 0.7414;
    cur: number= 175;
    constructor(){ }
}
