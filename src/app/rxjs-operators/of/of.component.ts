import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  // of - Converts the arguments to an observable sequence
  // Emits any number of provided values in sequence
  private source1 = of(1, 2, 3, 4, 5);
  private source2 = of([5, 6, 7, 8]);

  constructor() { }

  ngOnInit(): void {
    console.log('Of - creation operators');
    this.source1.subscribe(val => console.log(val));
    this.source2.subscribe(val => console.log(val));
  }

}
