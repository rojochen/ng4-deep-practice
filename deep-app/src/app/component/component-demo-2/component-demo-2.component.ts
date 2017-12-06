import { Component, OnInit, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-component-demo-2',
  templateUrl: './component-demo-2.component.html',
  styleUrls: ['./component-demo-2.component.css']
})
export class ComponentDemo2Component implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() studentInfo: Array<{ id: number, name: string }>;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit，在第一輪ngOnChanges()完成之後調用，只調用一次');
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
}
