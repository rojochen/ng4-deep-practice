import {
  Component,
  OnInit,
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
import { displayTime } from '../../../shared/common/uitl';

@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.css'],
  providers: [LifeCycleSvcService]
})
export class LifeParentComponent implements
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  LifeCycleStatusList: any;
  NowDate: Date;
  constructor(
    private Log: LoggerService,
    private LifeCycleSvc: LifeCycleSvcService
  ) {
    this.Log.debug('parent constructor');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent constructor' }]);
    this.LifeCycleStatusList = this.getLifeCycleData();
  }
  ngOnChanges() {
    this.Log.debug('life parent ngOnChanges');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.debug('life parent ngOnInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.debug('parent ngDoCheck');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.debug('parent ngAfterContentInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.debug('parent ngAfterContentChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.debug('parent ngAfterViewInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.debug('parent ngAfterViewChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.debug('parent ngOnDestroy');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'parent ngOnDestroy' }]);
  }
  getLifeCycleData() {
    return new Promise((resolve, reject) => {
      // return setTimeout(() => {
      return resolve(this.LifeCycleSvc.getLifeCycleList());
      // }, 1000);
    });
  }
  getNowTime(): string {
    return displayTime(new Date(), 'yyyy-MM-dd hh:mm');
  }
}
