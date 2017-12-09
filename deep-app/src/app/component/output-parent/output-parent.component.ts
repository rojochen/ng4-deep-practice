import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger.service';
@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  initialCount: number;
  changeMsg: string;
  constructor(private Log: LoggerService) { }

  ngOnInit() {
    this.initialCount = 5;
  }
  countChange(event: number) {
    this.Log.debug('event: ' + event);
    this.changeMsg = `子组件change事件已觸發，當前值: ${event}`;
  }


}
