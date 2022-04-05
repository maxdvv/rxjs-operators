import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  // Convert an array, promise, or iterable into an observable.
  private array = from([1, 2, 3, 4, 5]);
  private promise = from(new Promise(resolve => resolve('promise to observable')));
  private str = from('String to observable');

  constructor() { }

  ngOnInit(): void {
    console.log('From - creation operators');
    this.array.subscribe(val => console.log(val));
    this.promise.subscribe(val => console.log(val));
    this.str.subscribe(val => console.log(val));

  }

}
