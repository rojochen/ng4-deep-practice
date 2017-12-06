import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component-demo-1',
  templateUrl: './component-demo-1.component.html',
  styleUrls: ['./component-demo-1.component.css']
})
export class ComponentDemo1Component implements OnInit, OnDestroy, DoCheck {
  StudentInfo: Array<{ id: number, name: string }> = [
    {
      id: 1,
      name: 'Louis'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
  }
  ngOnDestroy() {
  }

}
