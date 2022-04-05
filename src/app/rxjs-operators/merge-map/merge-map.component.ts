import { Component, OnInit } from '@angular/core';
import {interval, map, mergeMap, of} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  // Map to observable, emit values
  // mergeMap allows for multiple inner subscriptions to be active at a time.
  // Because of this, one of the most common use-case for mergeMap is requests
  // that should not be canceled, think writes rather than reads.
  constructor() { }

  ngOnInit(): void {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000).pipe(take(2), map(i => x+i))),
    );
    console.log('mergeMap - transformation operators');
    result.subscribe(x => console.log(x));
  }

}
