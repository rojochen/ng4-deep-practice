import { Subject } from 'rxjs/Subject';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/observable/of'; // 靜態方法宣告
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('observableButton') myButton: ElementRef;
  @ViewChild('mySubjectButton') mySubjectButton: ElementRef;
  clickSubscription: Subscription;
  mySubject: Subject<MouseEvent>;
  clickSubjectSubscription: Subscription;
  subscriptionList: Subscription[] = new Array<Subscription>(); // 收集所有的subscription
  constructor() {
  }
  addSubject1() {
    this.subscriptionList.push(this.mySubject.subscribe(v => { alert('subjct1' + v); console.log(v); }));
  }
  addSubject2() {
    this.subscriptionList.push(this.mySubject.subscribe(v => { alert('subjct2' + v); console.log(v); }));
  }
  showSubject() {

  }
  doObservableFrom() {
    // alert 偶數的數字
    const numberSubscription = Observable.from([1, 2, 3, 4, 5, 6, 7, 8]).filter(x => x % 2 === 0).subscribe(x => alert(x));
    numberSubscription.unsubscribe();
  }
  doObservableOf() {
    // alert 偶數的數字
    const numberObservable = Observable.of(1, 2, 3, 4, 5, 6, 7, 8);
    const numberSubscription = numberObservable.filter(x => x % 2 === 1).subscribe(v => alert(v));
    numberSubscription.unsubscribe();
  }
  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
    this.subscriptionList.forEach(v => v.unsubscribe());
  }
  ngAfterViewInit(): void {
    // ngAfterViewInit : 會在view的實體dom產生後觸發
    // 註冊click事件
    const myButtonObservable = Observable.fromEvent(this.myButton.nativeElement, 'click');
    this.clickSubscription = myButtonObservable.subscribe((res: MouseEvent) => {
      alert('click fromEvent');
    });
    // subject demo
    this.mySubject = new Subject<MouseEvent>();
    const mySubjectButtonObservable = Observable.fromEvent(this.mySubjectButton.nativeElement, 'click');
    this.clickSubjectSubscription = mySubjectButtonObservable.subscribe(this.mySubject);
  }
  ngOnInit() {
  }

}
