import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../core/service/logger.service';
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
    // 接受到child 的事件傳值
    this.Log.debug('event: ' + event);
    this.changeMsg = `子组件change事件已觸發，當前值: ${event}`;
  }


}
