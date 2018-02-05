import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  // @Input('value') count: number = 0;
  // 接受view element 的屬性值
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
