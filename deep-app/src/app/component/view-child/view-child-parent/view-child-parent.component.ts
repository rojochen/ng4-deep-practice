import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';
@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildChildComponent) child: ViewChildChildComponent;
  @ViewChild('myViewChild') viewDemo: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  // get child name
  ngAfterViewInit() {
    console.log(this.child);
    console.log(this.viewDemo.nativeElement.innerHTML);
  }

}
