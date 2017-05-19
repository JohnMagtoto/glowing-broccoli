import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeface',
  templateUrl: './timeface.component.html',
  styleUrls: ['./timeface.component.css']
})
export class TimefaceComponent implements OnInit {
  private _time ;

  constructor() { }

  ngOnInit() {
    this._time = "1";
  }

}
