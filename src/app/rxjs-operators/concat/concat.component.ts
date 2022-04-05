import { Component, OnInit } from '@angular/core';
import {concat, of} from "rxjs";

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  // Subscribe to observables in order as previous completes

  constructor() { }

  ngOnInit(): void {
    concat(
      of('concat - combine operators'),
      of(1, 2, 3),
      of([4, 5, 6]),
      of(7, 8, 9)
    ).subscribe(console.log);
  }

}
