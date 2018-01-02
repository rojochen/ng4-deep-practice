import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-childer-child',
  templateUrl: './view-childer-child.component.html',
  styleUrls: ['./view-childer-child.component.css']
})
export class ViewChilderChildComponent implements OnInit {
  @Input() ok = 'OK';
  @Output() close = new EventEmitter<Boolean>();
  hidden: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    this.close.emit(true);
  }

}
