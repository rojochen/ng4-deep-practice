import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ViewChildrenChildComponent } from '../view-children-child/view-children-child.component'
@Component({
  selector: 'app-view-children-parent',
  templateUrl: './view-children-parent.component.html',
  styleUrls: ['./view-children-parent.component.css']
})
export class ViewChildrenParentComponent implements OnInit, AfterViewInit {
  @ViewChildren(ViewChildrenChildComponent) alerts: QueryList<ViewChildrenChildComponent>;
  alertsArr = [];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // 在ngAfterViewInit取得child的元素
    this.alertsArr = this.alerts.toArray();
  }
  showAlert(step) {
    this.alertsArr[step - 1].show(); // step 1 is alert index 0
  }

}
