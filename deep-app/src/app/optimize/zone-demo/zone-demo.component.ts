import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  templateUrl: './zone-demo.component.html',
  styleUrls: ['./zone-demo.component.css']
})
export class ZoneDemoComponent implements OnInit {
  count: number;
  constructor(private zone: NgZone) {
    this.count = 0;
  }
  update() {
    this.zone.run(() => {
      this.count = this.count;
    });
  }
  ngOnInit() {
    //setInterval(() => this.count++, 10);
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        setInterval(() => this.count++, 10);
      }
    });
  }

}
