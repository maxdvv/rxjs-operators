import { Component, OnInit } from '@angular/core';
import {Observable, of, map, interval, from, fromEvent} from "rxjs";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  words = ['hello', 'world', 'wfm'];

  constructor() { }

  ngOnInit(): void {
    // example 1
    // interval(1000)
    //   .pipe(
    //     take(10)
    //   )
    //   .subscribe(subscriberLog('interval'))

    // example2 Observable iterator
    // from(this.words).subscribe(subscriberLog('from'));

    // example3 interval and map
    // interval(1000).pipe(
    //   map(x => x * x),
    //   take(10)
    // ).subscribe(subscriberLog('interval'));

    // example4
    // fromEvent(document.querySelector('input'), 'keyup').pipe()




  }

}

function subscriberLog(name: any) {
  return {
    next(x: any) {
      console.log(name, ': ', x);
    },
    error(err: any) {
      console.log('Error: ', err);
    },
    complete() {
      console.log(name, ': completed.');
    }
  };
}
