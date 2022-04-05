import { Component, OnInit } from '@angular/core';
import {combineLatest, forkJoin, of} from "rxjs";

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  // When any observable emits a value, emit the last emitted value from each

  constructor() { }

  ngOnInit(): void {
    const observable1 =  of(1, 2, 3, 4);
    const observable2 =  of( 5, 6, 8);
    const observable3 =  of(11, 12, 13);

    combineLatest(observable1, observable2, observable3).subscribe(
      ([observable1Val, observable2Val, observable3Val]) => {
        console.log(
          `combineLatest - combine operators
           observable1Val Latest: ${observable1Val},
           observable2Val Latest: ${observable2Val},
           observable3Val Latest: ${observable3Val}`
        );
      }
    )

  }

}
