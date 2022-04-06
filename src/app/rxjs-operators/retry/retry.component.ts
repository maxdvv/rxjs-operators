import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, of, retry, throwError } from "rxjs";

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  // Retry an observable sequence a specific number of times should an error occur.
  // Useful for retrying HTTP requests!
  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    const example = source.pipe(
      mergeMap(val => {
        if (val > 3) {
          return throwError(() => 'Error!');
        }
        return of(val);
      }),
      retry(2)
    );

    const subscribe = example.subscribe({
      next: val => console.log(val),
      error: val => console.log(`${val}: Retried 2 times then quit!`)
    });
  }

}
