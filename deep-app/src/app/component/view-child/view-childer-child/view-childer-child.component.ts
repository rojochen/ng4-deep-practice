import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-childer-child',
  templateUrl: './view-childer-child.component.html',
  styleUrls: ['./view-childer-child.component.css']
})
export class ViewChilderChildComponent implements OnInit {
  @Input() ok = 'OK';
  @Output() close = new EventEmitter<boolean>();
  hidden:boolean = true;
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
