import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  // @Input('value') count: number = 0;
  @Input() value: number;
  count: number;
  constructor() { }

  ngOnInit() {
    this.count = this.value;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;

  }
}
