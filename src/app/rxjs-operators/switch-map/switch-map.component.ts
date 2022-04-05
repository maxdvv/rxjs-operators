import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, switchMap} from "rxjs";

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  // Map to observable, complete previous inner observable, emit values
  // Switch to a new observable and unsubscribe from previous

  constructor() { }

  ngOnInit(): void {
    console.log('switchMap - transformation operators');
    fromEvent(document, 'keydown')
      .pipe(
        // restart counter on every keydown
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }

}
