import { Component, OnInit } from '@angular/core';
import {filter, from} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // Emit values that pass the provided condition
  constructor() { }

  ngOnInit(): void {
    const source = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 },
      { name: 'Ben', age: 37 }
    ]);

    console.log('filter - filtering operators');
    const example = source.pipe(filter(person => person.age >= 30));
    const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
  }

}
