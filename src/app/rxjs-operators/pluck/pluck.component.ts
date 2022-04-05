import { Component, OnInit } from '@angular/core';
import {from, pluck} from "rxjs";

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  // pluck (выдернуть) - Select property to emit
  // You can select only one property
  // If you want get inner object property: pluck( 'job', 'title') or pluck( 'job', 'language')
  constructor() { }

  ngOnInit(): void {
    const source = from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
      { name: 'Sarah', age: 35 }
    ]);
    const example = source.pipe(pluck( 'job', 'title'));
    console.log('pluck - transformation operators');
    const subscribe = example.subscribe(val => console.log(val));
  }

}
