import { Component, OnInit } from '@angular/core';
import {delay, forkJoin, of, zip} from "rxjs";

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  //When all observables complete, emit the last emitted value from each.

  constructor() { }

  ngOnInit(): void {
    const observable = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: of( 5, 6, 8),
      baz: of(11, 12, 13),
    });

    console.log('forkJoin - combine operators');
    observable.subscribe(val => console.log(val));
  }

}
