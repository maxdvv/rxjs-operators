import { Component, OnInit } from '@angular/core';
import {concat, merge, of} from "rxjs";

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  // Convert multiple observables into a single observable.

  constructor() { }

  ngOnInit(): void {
    merge(
      of('merge - combine operators'),
      of(1, 2, 3) ,
      of([4, 5, 6]),
      of(7, 8, 9)
    ).subscribe(console.log);
  }

}
