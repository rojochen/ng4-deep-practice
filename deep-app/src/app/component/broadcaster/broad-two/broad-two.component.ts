import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '../../../shared/service/broadcaster.service';
@Component({
  selector: 'app-broad-two',
  templateUrl: './broad-two.component.html',
  styleUrls: ['./broad-two.component.css']
})
export class BroadTwoComponent implements OnInit {
  message: string;
  constructor(private broadcaster: BroadcasterService) { }

  ngOnInit() {
    this.registerStringBroadcast();
  }
  registerStringBroadcast() {
    this.broadcaster.on<string>('MyEvent')
      .subscribe(message => {
        if(message) {
          this.message = `接收到的訊息: ${message}`;
        } else {
          this.message = '沒有訊息';
        }
        
      });
  }

}
