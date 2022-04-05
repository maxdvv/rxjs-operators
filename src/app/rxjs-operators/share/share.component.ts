import { Component, OnInit } from '@angular/core';
import {mapTo, share, tap, timer} from "rxjs";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  // Share source among multiple subscribers
  // share is like multicast with a Subject and refCount!

  constructor() { }

  ngOnInit(): void {
    console.log('share - multicasting operators');
    const source = timer(1000);
    const example = source.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );

    const subscribe = example.subscribe(val => console.log(val));
    const subscribeTwo = example.subscribe(val => console.log(val));


    const sharedExample = example.pipe(share());
    const subscribeThree = sharedExample.subscribe(val => console.log(val));
    const subscribeFour = sharedExample.subscribe(val => console.log(val));
    const subscribeFive = sharedExample.subscribe(val => console.log(val));
  }

}
