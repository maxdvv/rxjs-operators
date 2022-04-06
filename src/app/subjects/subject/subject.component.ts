import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  // A special type of Observable which shares a single execution path among observers
  // A Subject is a special type of Observable that allows values to be multicasted to many Observers.
  // Subjects are like EventEmitters.
  constructor() { }

  ngOnInit(): void {
    const sub = new Subject();
    console.log('Subject example');
    sub.next(1);
    sub.subscribe(x => {
      console.log('Subscriber A', x);
    });
    sub.next(2);
    sub.subscribe(x => {
      console.log('Subscriber B', x);
    });
    sub.next(3);
  }

}
