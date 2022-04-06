import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { OfComponent } from './rxjs-operators/of/of.component';
import { FromComponent } from './rxjs-operators/from/from.component';
import { AjaxComponent } from './rxjs-operators/ajax/ajax.component';
import { ZipComponent } from './rxjs-operators/zip/zip.component';
import { ForkJoinComponent } from './rxjs-operators/fork-join/fork-join.component';
import { CombineLatestComponent } from './rxjs-operators/combine-latest/combine-latest.component';
import { ConcatComponent } from './rxjs-operators/concat/concat.component';
import { MergeComponent } from './rxjs-operators/merge/merge.component';
import { StartWithComponent } from './rxjs-operators/start-with/start-with.component';
import { SwitchMapComponent } from './rxjs-operators/switch-map/switch-map.component';
import { MergeMapComponent } from './rxjs-operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './rxjs-operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './rxjs-operators/exhaust-map/exhaust-map.component';
import { MapComponent } from './rxjs-operators/map/map.component';
import { ScanComponent } from './rxjs-operators/scan/scan.component';
import { PluckComponent } from './rxjs-operators/pluck/pluck.component';
import { BufferTimeComponent } from './rxjs-operators/buffer-time/buffer-time.component';
import { ShareComponent } from './rxjs-operators/share/share.component';
import { ShareReplayComponent } from './rxjs-operators/share-replay/share-replay.component';
import { HttpClientModule} from "@angular/common/http";
import { CatchErrorComponent } from './rxjs-operators/catch-error/catch-error.component';
import { RetryComponent } from './rxjs-operators/retry/retry.component';
import { FilterComponent } from './rxjs-operators/filter/filter.component';
import { TakeComponent } from './rxjs-operators/take/take.component';
import { TakeUntilComponent } from './rxjs-operators/take-until/take-until.component';
import { DebounceTimeComponent } from './rxjs-operators/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './rxjs-operators/distinct-until-changed/distinct-until-changed.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    OfComponent,
    FromComponent,
    AjaxComponent,
    ZipComponent,
    ForkJoinComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    StartWithComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    MapComponent,
    ScanComponent,
    PluckComponent,
    BufferTimeComponent,
    ShareComponent,
    ShareReplayComponent,
    CatchErrorComponent,
    RetryComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
