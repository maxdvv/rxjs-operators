import { Component, OnInit } from '@angular/core';
import {debounceTime, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  // Discard emitted values that take less than the specified time between output
  // This operator is popular in scenarios such as type-ahead where the rate of user input must be controlled!
  constructor() { }

  ngOnInit(): void {
    const searchBox = document.getElementById('search');

    // @ts-ignore
    const keyup$ = fromEvent(searchBox, 'keyup');

    console.log('debounceTime - filtering operators');
    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(console.log);
  }

}
