import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})
export class DistinctUntilChangedComponent implements OnInit {
  // Only emit when the current value is different than the last
  // distinctUntilChanged uses === comparison by default, object references must match!
  // If you want to compare based on an object property, you can use distinctUntilKeyChanged instead!
  constructor() { }

  ngOnInit(): void {
    const source$ = from([1, 3, 1, 2, 2, 3, 3]);

    console.log('distinctUntilChanged - filtering operators');
    source$
      .pipe(distinctUntilChanged())
      .subscribe(console.log);
  }

}
