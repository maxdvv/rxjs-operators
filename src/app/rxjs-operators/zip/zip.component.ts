import { Component, OnInit } from '@angular/core';
import {delay, of, zip} from "rxjs";

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  // After all observables emit, emit values as an array

  constructor() { }

  ngOnInit(): void {
    const dough = of('Dough');
    const tomatoes = of('Tomatoes');
    const sauce = of('Sauce');
    const sausages = of('Sausages');

    const pizza = zip(
      dough,
      tomatoes.pipe(delay(1000)),
      sauce.pipe(delay(2000)),
      sausages.pipe(delay(3000))
    );

    console.log('zip - combine operators');
    pizza.subscribe(val => console.log(val));
  }

}
