import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ViewChilderChildComponent } from '../view-childer-child/view-childer-child.component'
@Component({
  selector: 'app-view-childer-parent',
  templateUrl: './view-childer-parent.component.html',
  styleUrls: ['./view-childer-parent.component.css']
})
export class ViewChilderParentComponent implements OnInit, AfterViewInit {
  @ViewChildren(ViewChilderChildComponent) alerts: QueryList<ViewChilderChildComponent>;
  alertsArr = [];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // 在ngAfterViewInit取得hild的元素
    this.alertsArr = this.alerts.toArray();
  }
  showAlert(step) {
    this.alertsArr[step - 1].show(); // step 1 is alert index 0
  }

}
