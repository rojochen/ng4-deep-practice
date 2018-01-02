import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { IItem } from '../model/Iitem';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ItemMasterComponent implements OnInit {
  items: IItem[];
  formProductName: string;
  formPrice: number;
  constructor() {
    this.formProductName = 'Iphon X';
    this.formPrice = 3000;
    this.items = new Array<IItem>();
  }
  showData(form: NgForm) {
    //alert(form.valid);
    this.items.push(form.value);
  }
  showItems() {
    console.log(this.items);
  }
  addItems() {
    const _list = new Array<IItem>();
  }
  changeIndex3() {
    this.items[3].productName = 'Index3';
  }
  onItemChangeEvent(val: any) {
    console.log(val);
  }
  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      const productNo: number = i;
      const productName: string = 'Product' + productNo;
      const releasedDate: Date = new Date();
      const price: number = 10 * productNo;
      this.items.push({
        productNo,
        productName,
        releasedDate,
        price
      });
    }
  }

}
