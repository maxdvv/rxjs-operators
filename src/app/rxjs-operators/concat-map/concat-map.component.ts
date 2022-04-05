import { Component, OnInit } from '@angular/core';
import {concatMap, delay, of} from "rxjs";

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit  {
  // Map values to inner observable, subscribe and emit in order.

  constructor() { }

  ngOnInit(): void {
    const source = of(2000, 1000);
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    const subscribe = example.subscribe(val =>
      console.log(`With concatMap: ${val}`)
    );
  }

}
