import { Item } from './../model/item';
import { Component, OnInit, Input,Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
 
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  @Input('item') item: Item;
  @Output() changeEvent: EventEmitter<Item> = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    // console.log(this.item);
  }
  change() {
    console.log(this.item);
     
    this.item.updateDate = new Date();
    this.changeEvent.emit(this.item);

  }

}
