import { Component, OnInit } from '@angular/core';
import {AsyncSubject} from "rxjs";

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  // Emits its last value on completion
  constructor() { }

  ngOnInit(): void {
    console.log('AsyncSubject example');
    const sub = new AsyncSubject();

    sub.subscribe(console.log);

    sub.next(123); //nothing logged

    sub.subscribe(console.log);

    sub.next(456); //nothing logged
    sub.complete(); //456, 456 logged by both subscribers
  }

}
