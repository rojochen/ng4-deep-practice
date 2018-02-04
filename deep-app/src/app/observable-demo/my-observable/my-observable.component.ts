import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'; // 靜態方法宣告
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('observableButton') myButton: ElementRef;
  clickSubscription: Subscription;

  constructor() { }


  doObserable() {
    const numberObservable = Observable.of(1, 2, 3, 4, 5, 6, 7, 8);
    const numberSubscription = numberObservable.filter(x => x % 2 === 1).subscribe(v => alert(v));
    numberSubscription.unsubscribe();
  }
  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    // ngAfterViewInit : 會在view的實體dom產生後觸發
    const myButtonObservable = Observable.fromEvent(this.myButton.nativeElement, 'click');
    this.clickSubscription = myButtonObservable.subscribe((res: MouseEvent) => {
      alert('click fromEvent');
    });
  }
  ngOnInit() {
  }

}
