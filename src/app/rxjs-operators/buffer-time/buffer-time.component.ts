import { Component, OnInit } from '@angular/core';
import {bufferTime, interval} from "rxjs";

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {
  // Collect emitted values until provided time has passed, emit as array.
  constructor() { }

  ngOnInit(): void {
    const source = interval(500);
    const example = source.pipe(bufferTime(2000));
    const subscribe = example.subscribe(val =>
      console.log('Buffered with Time:', val)
    );
  }

}
