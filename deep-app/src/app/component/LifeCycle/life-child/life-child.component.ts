import {
  Component,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  OnDestroy,
  DoCheck,
  EventEmitter
} from '@angular/core';
import { LoggerService } from '../../../service/logger.service';
import { ILifeCycleInfo } from '../life-parent/life-parent.component';
import { debug } from 'util';

const callEmit = (fn, data) => { fn.emit(data); };

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
  @Output() change: EventEmitter<ILifeCycleInfo[]> = new EventEmitter<ILifeCycleInfo[]>();
  constructor(private Log: LoggerService) {
    this.Log.error('life child constructor');
    // not work
    this.change.emit([{ location: 'child', lifeType: 'life child constructor' }]);
  }
  ngOnChanges() {
    this.Log.error('life child ngOnChanges');
    this.change.emit([{ location: 'child', lifeType: 'life child ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.error('life child ngOnInit');
    this.change.emit([{ location: 'child', lifeType: 'life child ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.error('life child ngDoCheck');
    this.change.emit([{ location: 'child', lifeType: 'life child ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.error('life child ngAfterContentInit');
    this.change.emit([{ location: 'child', lifeType: 'life child ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.error('life child ngAfterContentChecked');
    this.change.emit([{ location: 'child', lifeType: 'life child ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.error('life child ngAfterViewInit');
    this.change.emit([{ location: 'child', lifeType: 'life child ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.error('life child ngAfterViewChecked');
    this.change.emit([{ location: 'child', lifeType: 'life child ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.error('life child ngOnDestroy');
    this.change.emit([{ location: 'child', lifeType: 'life child ngOnDestroy' }]);
  }
}
