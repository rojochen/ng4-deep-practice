import { Component, OnInit, ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
console.log('ChildComponent: ', ChildComponent);
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ContentChild(ChildComponent)
  child: ChildComponent;
  constructor() { }

  ngOnInit() {
  }

}
