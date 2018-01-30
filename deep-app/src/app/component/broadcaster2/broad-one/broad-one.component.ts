import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '../../../shared/service/broadcaster.service';

@Component({
  selector: 'app-broad-one',
  templateUrl: './broad-one.component.html',
  styleUrls: ['./broad-one.component.css']
})
export class BroadOneComponent implements OnInit {
  message: string;
  constructor(private broadcaster: BroadcasterService) {
    
  }

  ngOnInit() {
  }
  
  emitStringBroadcast() {
    this.broadcaster.broadcast('MyEvent', this.message);
  }
}
