import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
//  changeDetection: ChangeDetectionStrategy.OnPush

@Component({
  selector: 'app-detection-strategy-demo',
  templateUrl: './detection-strategy-demo.component.html',
  styleUrls: ['./detection-strategy-demo.component.css'],
})
export class DetectionStrategyDemoComponent implements OnInit {

  constructor() { }
  foods: string[] = ['Bacon', 'Lettuce', 'Tomatoes'];

  ngOnInit() {
  }
  addForPush(food) {
    const newArray: string[] = [];
    this.foods.map((v) => newArray.push(v));
    newArray.push(food.value);
    this.foods = newArray;
  }
  removeLastForPush() {
    const newArray: string[] = [];
    this.foods.map((v) => newArray.push(v));
    newArray.pop();
    this.foods = newArray;
  }
  add(food) {
    console.log(food);
    if (food) {
      this.foods.push(food.value);
    }
  }
  removeLast() {
    this.foods.pop();
  }

}
