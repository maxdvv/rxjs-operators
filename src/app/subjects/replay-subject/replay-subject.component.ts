import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from "rxjs";

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  // "Replays" or emits old values to new subscribers
  constructor() { }

  ngOnInit(): void {
    console.log('ReplaySubject example');
    const sub = new ReplaySubject(3);

    sub.next(1);
    sub.next(2);

   // OUTPUT => Subscriber A 1 Subscriber A 2
    sub.subscribe(x => {
      console.log('Subscriber A', x);
    });
    sub.next(3); // OUTPUT => Subscriber A 3
    sub.next(4); // OUTPUT => Subscriber A 4

    // OUTPUT => Subscriber B2, Subscriber B3, Subscriber B4 (log of last 3 values from new subscriber)
    sub.subscribe(x => {
      console.log('Subscriber B', x);
    });

    sub.next(5); // OUTPUT => Subscriber A 5, Subscriber B 5 (log from both subscribers)
  }

}
