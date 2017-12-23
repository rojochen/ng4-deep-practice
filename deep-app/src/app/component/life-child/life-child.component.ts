import {
  Component,
  OnInit, Input,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  OnDestroy,
  DoCheck
} from '@angular/core';
import { LoggerService } from '../../service/logger.service';
@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.css']
})
export class LifeChildComponent implements
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges, OnDestroy,
  DoCheck {
  @Input() studentInfo: Array<{ id: number, name: string }>;
  constructor(private Log: LoggerService) {
    this.Log.error('life child constructor');
  }
  ngOnChanges() {
    this.Log.error('life child ngOnChanges');
  }
  ngOnInit() {
    this.Log.error('life child ngOnInit');
  }
  ngDoCheck() {
    this.Log.error('life child ngDoCheck');
  }
  ngAfterContentInit() {
    this.Log.error('life child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.Log.error('life child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.Log.error('life child ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.Log.error('life child ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.Log.error('life child ngOnDestroy');
  }
}
