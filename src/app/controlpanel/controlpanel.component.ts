import { Component, OnInit } from '@angular/core';

const enum Mode {
  work,
  break
}

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
  private _mode : string;
  private readonly WORK_STRING = "work";
  private readonly BREAK_STRING = "break";

  constructor() { }

  ngOnInit() {
    this._mode = this._modeStringify(Mode.break);
  }

  private _modeStringify(mode : Mode) : string {
    return mode === Mode.work ? this.WORK_STRING : this.BREAK_STRING;
  }

  startTimer(){
    console.log("timer started");
  }

  stopTimer(){
    console.log("timer stopped");
  }

}
