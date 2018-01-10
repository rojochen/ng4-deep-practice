import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '../../../service/broadcaster.service';

@Component({
  selector: 'app-broadone',
  templateUrl: './broadone.component.html',
  styleUrls: ['./broadone.component.css']
})
export class BroadoneComponent implements OnInit {
  message: string;
  constructor(private broadcaster: BroadcasterService) {
    
  }

  ngOnInit() {
  }
  
  emitStringBroadcast() {
    this.broadcaster.broadcast('MyEvent', this.message);
  }
}
