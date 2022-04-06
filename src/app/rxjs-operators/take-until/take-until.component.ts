import { Component, OnInit } from '@angular/core';
import {interval, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {
  // Emit values until provided observable emits
  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    const timer$ = timer(5000);
    const example = source.pipe(takeUntil(timer$));
    console.log('takeUntil - filtering operators');
    const subscribe = example.subscribe(val => console.log(val));
  }

}
