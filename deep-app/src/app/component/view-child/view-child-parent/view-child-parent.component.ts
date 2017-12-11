import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';
@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildChildComponent)
  child: ViewChildChildComponent;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.child);
  }

}
