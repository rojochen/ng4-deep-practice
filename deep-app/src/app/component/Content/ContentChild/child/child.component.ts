import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name: String;
  constructor() { }

  ngOnInit() {
    this.name = 'childName';
  }

}
