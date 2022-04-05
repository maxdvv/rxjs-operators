import { Component, OnInit } from '@angular/core';
import {interval, startWith} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  // Emit given value first

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    console.log('startWith - combine operators');
    source.pipe(take(2), startWith(-3, -2, -1))
      .subscribe(val => console.log(val));
  }
}
