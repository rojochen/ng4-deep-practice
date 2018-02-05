import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  @Input() count: number;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }
  increment() {
    this.count++;
    // 觸發change event
    this.change.emit(this.count);
  }
  decrement() {
    this.count--;
    // 觸發change event
    this.change.emit(this.count);
  }

}
