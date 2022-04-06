import { Component, OnInit } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {
  // Gracefully handle errors in an observable sequence.
  // Remember to return an observable from the catchError function!
  constructor() { }

  ngOnInit(): void {
    console.log('catchError - error handling operators');
    const source = throwError(() => 'This is an error!');
    const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
    const subscribe = example.subscribe(val => console.log(val));
  }

}
