import { Component, OnInit } from '@angular/core';
import {exhaustMap, interval} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {
  // Map to inner observable, ignore other values until that observable completes

  constructor() { }

  ngOnInit(): void {
    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(2));

    const exhaustSub = firstInterval
      .pipe(
        exhaustMap(f => {
          console.log(`Emission Corrected of first interval: ${f}`);
          return secondInterval;
        })
      ).subscribe(s => console.log(s));
  }

}
