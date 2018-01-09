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
    this.Log.error('life child constructor');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child constructor' }]);
  }
  ngOnChanges() {
    this.Log.error('life child ngOnChanges');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.error('life child ngOnInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.error('life child ngDoCheck');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.error('life child ngAfterContentInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.error('life child ngAfterContentChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.error('life child ngAfterViewInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.error('life child ngAfterViewChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.error('life child ngOnDestroy');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'child', lifeType: 'life child ngOnDestroy' }]);
  }
}
