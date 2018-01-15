import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertMessageComponent implements OnInit, OnChanges, DoCheck {
  @Input() showMessageFlag: boolean;

  constructor(private cd: ChangeDetectorRef) {
    console.log(this.cd);
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {

  }
  ngDoCheck() {
  }
  close() {
    this.showMessageFlag = false;
  }
}
