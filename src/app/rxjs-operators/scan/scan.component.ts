import { Component, OnInit } from '@angular/core';
import {of, scan} from "rxjs";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  // Reduce over time

  constructor() { }

  ngOnInit(): void {
    const source = of(1, 2, 3);
    const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    console.log('scan - transformation operators');
    const subscribe = example.subscribe(val => console.log(val));
  }

}
