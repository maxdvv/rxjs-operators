import { Component, OnInit } from '@angular/core';
import {pluck, shareReplay, Subject, tap} from "rxjs";

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  // Share source and replay specified number of emissions on subscription

  constructor() { }

  ngOnInit(): void {
    console.log('shareReplay - multicasting operators');
    const routeEnd = new Subject<{data: any, url: string}>();
    const lastUrl = routeEnd.pipe(
      tap(_ => console.log('executed')),
      pluck('url'),
      shareReplay(1)
    );
    const initialSubscriber = lastUrl.subscribe(console.log)
    routeEnd.next({data: {}, url: 'my-path'});
    const lateSubscriber = lastUrl.subscribe(console.log);
  }

}
