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
import { LoggerService } from '../../../service/logger.service';
export interface ILifeCycleInfo {
  location: string;
  lifeType: string;
}
const concat = (oldList, newList) => Array.prototype.push.apply(oldList, newList);
@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.css']
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
  LifeCycleStatusList: Array<ILifeCycleInfo> = [];
  constructor(private Log: LoggerService) {
    this.Log.debug('life parent constructor');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent constructor' }]);
  }
  ngOnChanges() {
    this.Log.debug('life parent ngOnChanges');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.debug('life parent ngOnInit');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.debug('life parent ngDoCheck');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.debug('life parent ngAfterContentInit');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.debug('life parent ngAfterContentChecked');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.debug('life parent ngAfterViewInit');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.debug('life parent ngAfterViewChecked');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.debug('life parent ngOnDestroy');
    concat(this.LifeCycleStatusList, [{ location: 'parent', lifeType: 'life parent ngOnDestroy' }]);
  }
  Change(event: ILifeCycleInfo[]) {
    concat(this.LifeCycleStatusList, event);
  }
}
