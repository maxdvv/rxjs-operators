import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {
  // Requires an initial value and emits the current value to new subscribers
  constructor() { }

  ngOnInit(): void {
    const behaviourSubject = new BehaviorSubject(123);
    console.log('BehaviorSubject example');

    behaviourSubject.subscribe(console.log);
    behaviourSubject.subscribe(console.log);

    behaviourSubject.next(456);

    behaviourSubject.subscribe(console.log);

    behaviourSubject.next(789);
  }

}
