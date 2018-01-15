import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

  arrayList: any[] = [1, 2, 3, 4, 5, 6];
  constructor() { }

  rerun(){
    this.arrayList = [];
    setTimeout(() => {
      this.arrayList = [1, 2, 3, 4, 5, 6];
    }, 200);
  }

}
