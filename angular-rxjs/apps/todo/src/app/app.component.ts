import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map, switchAll, take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // Example combineAll
    // let source = Observable.interval(1000).take(2);
    // let conbineAll = source.map(val =>
    //   Observable.interval(1000).pipe(
    //     take(5),
    //     map(i => `Result (${val}): ${i}`)

    //   )
    // );
    // let combined = conbineAll.combineAll();
    // combined.subscribe(x => console.log(x));

    // // Example concat
    // let timer = Observable.interval(1000).take(4);
    // let sequence = Observable.range(1, 10);
    // let result = timer.concat(sequence);
    // result.subscribe(x => console.log('concat', x));

    // // Concat all
    // const concatTotal = Observable.interval(2000);
    // const concat = concatTotal
    //   .map(val => Observable.of(val + 10))
    //   .concatAll();
    // const subscribeConcat = concat.subscribe(val =>
    //   console.log('Observable concatAll:', val)
    // );

    // // jorkJoin
    // const myPromise = val =>
    // new Promise(resolve =>
    //   setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    // );
    // const exampleJorkJoin = Observable.forkJoin(

    //   Observable.of('Hello'),
    //   Observable.of('World').delay(2000),
    //   Observable.interval(1000).take(1),
    //   Observable.interval(1000).take(2),
    //   myPromise('RESULT')
    // );
    // const subscribeJorkJoin = exampleJorkJoin.subscribe(val => console.log(val));

    // // Example merge
    // const first = Observable.interval(2500);
    // const second = Observable.interval(2000);
    // const third = Observable.interval(1500);
    // const fourth = Observable.interval(1000);

    // const exampleMerge = Observable.merge(
    //   first.mapTo('FIRST!'),
    //   second.mapTo('SECOND!'),
    //   third.mapTo('THIRD'),
    //   fourth.mapTo('FOURTH')
    // );
    // const subscribeMerge = exampleMerge.subscribe(val => console.log(val));

    // // Example mergeAll
    // const interval = Observable.interval(500).take(5);
    // const example = interval
    // .map(val => interval.delay(1000).take(3))
    // .mergeAll(2)
    // .subscribe(val => console.log(val));

    // // Example race
    // let test = 1;
    // let raceItem = Observable.race(
    //   Observable.interval(1500),
    //   Observable.interval(1000).mapTo(test),
    //   Observable.interval(2500),
    //   Observable.interval(2000)
    // )
    // let subscribeRace = raceItem.subscribe(val => console.log(val));
  }

}
