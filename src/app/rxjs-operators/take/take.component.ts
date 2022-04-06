import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import {interval} from "rxjs";

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  // Emit provided number of values before completing
  constructor() { }

  ngOnInit(): void {
    const interval$ = interval(1000);
    //take the first 3 emitted values
    const example = interval$.pipe(take(3));
    console.log('take - filtering operators');
    const subscribe = example.subscribe(val => console.log(val))
  }

}
