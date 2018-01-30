import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ContentChildrenChildComponent } from '../content-children-child/content-children-child.component';
@Component({
  selector: 'app-content-children-parent',
  templateUrl: './content-children-parent.component.html',
  styleUrls: ['./content-children-parent.component.css']
})
export class ContentChildrenParentComponent implements OnInit, AfterContentInit {
  @ContentChildren(ContentChildrenChildComponent) helloChildren: QueryList<ContentChildrenChildComponent>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    // Content children now setF
    console.log('this.helloChildren: ', this.helloChildren);
    this.onClickAll();
  }

  onClickAll() {
    // this.helloChildren.forEach(child => {
    //   console.log(child);
    //   child.randomizeColor();
    // });
    this.helloChildren.forEach(child => child.randomizeColor());
  }

}
