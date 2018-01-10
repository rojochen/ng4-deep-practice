import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '../../../service/broadcaster.service';
@Component({
  selector: 'app-broadtwo',
  templateUrl: './broadtwo.component.html',
  styleUrls: ['./broadtwo.component.css']
})
export class BroadtwoComponent implements OnInit {
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
