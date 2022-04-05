import { Component, OnInit } from '@angular/core';
import {from, map} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // Apply projection (function) with each value from source.

  constructor() { }

  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5]);
    console.log('map - transformation operators');
    const example = source.pipe(map(val => val + 10));
    const subscribe = example.subscribe(val => console.log(val));
  }

}
