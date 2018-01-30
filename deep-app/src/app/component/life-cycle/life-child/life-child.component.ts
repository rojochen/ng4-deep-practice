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
  DoCheck
} from '@angular/core';
import { LoggerService } from '../../../core/service/logger.service';
import { LifeCycleSvcService, ILifeCycleInfo } from '../life-cycle-svc.service';
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
  constructor(
    private Log: LoggerService,
    private LifeCycleSvc: LifeCycleSvcService
  ) {
    this.Log.error('child constructor');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child constructor' }]);
  }
  ngOnChanges() {
    this.Log.error('child ngOnChanges');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.error('child ngOnInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.error('child ngDoCheck');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.error('child ngAfterContentInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.error('child ngAfterContentChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.error('child ngAfterViewInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.error('child ngAfterViewChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.error('child ngOnDestroy');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'child ngOnDestroy' }]);
  }
}
