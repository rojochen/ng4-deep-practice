import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detector-ref-demo',
  templateUrl: './detector-ref-demo.component.html',
  styleUrls: ['./detector-ref-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DetectorRefDemoComponent implements OnInit {
  @Input() data: string[];
  count: number;
  constructor(private cd: ChangeDetectorRef) {
    this.count = 0;
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      setInterval(() => this.count++, 10);
    }
  }
  stopCount() {
    this.cd.detach();
  }
  refresh() {
    this.cd.detectChanges();
  }
}
