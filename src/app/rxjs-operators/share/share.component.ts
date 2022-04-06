import { Component, OnInit } from '@angular/core';
import {mapTo, share, tap, timer} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  // Share source among multiple subscribers
  // share is like multicast with a Subject and refCount!

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('share - multicasting operators');
    const todo$ = this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(share());

    todo$.subscribe((data) => console.log(data));
    todo$.subscribe((data) => console.log(data));

    // Example 1
    // const source = timer(1000);
    // const example = source.pipe(
    //   tap(() => console.log('***SIDE EFFECT***')),
    //   mapTo('***RESULT***')
    // );
    //
    // const subscribe = example.subscribe(val => console.log(val));
    // const subscribeTwo = example.subscribe(val => console.log(val));
    //
    //
    // const sharedExample = example.pipe(share());
    // const subscribeThree = sharedExample.subscribe(val => console.log(val));
    // const subscribeFour = sharedExample.subscribe(val => console.log(val));
    // const subscribeFive = sharedExample.subscribe(val => console.log(val));
  }

}
