import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-children-child',
  templateUrl: './content-children-child.component.html',
  styleUrls: ['./content-children-child.component.css']
})
export class ContentChildrenChildComponent implements OnInit {
  @Input() name: string;
  color: string;
  constructor() { }

  ngOnInit() {
    this.color = this.color || 'black';
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  randomizeColor(): void {
    this.color = this.getRandomColor();
  }

}
