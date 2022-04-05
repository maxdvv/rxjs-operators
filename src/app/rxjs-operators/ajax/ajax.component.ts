import { Component, OnInit } from '@angular/core';
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
  // Create an observable for an Ajax request with either a request object with url,
  // headers, etc or a string for a URL.

  constructor() { }

  ngOnInit(): void {
    console.log('Ajax - creation operators');

    ajax(`https://api.github.com/users?per_page=2`).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
