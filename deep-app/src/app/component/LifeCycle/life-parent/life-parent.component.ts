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
import { LifeCycleSvcService, ILifeCycleInfo } from '../life-cycle-svc.service';


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
  LifeCycleStatusList: ILifeCycleInfo[] = [];
  constructor(
    private Log: LoggerService,
    private LifeCycleSvc: LifeCycleSvcService
  ) {
    this.Log.debug('life parent constructor');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent constructor' }]);
    this.LifeCycleStatusList = this.LifeCycleSvc.getLifeCycleList();
  }
  ngOnChanges() {
    this.Log.debug('life parent ngOnChanges');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngOnChanges' }]);
  }
  ngOnInit() {
    this.Log.debug('life parent ngOnInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngOnInit' }]);
  }
  ngDoCheck() {
    this.Log.debug('life parent ngDoCheck');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngDoCheck' }]);
  }
  ngAfterContentInit() {
    this.Log.debug('life parent ngAfterContentInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngAfterContentInit' }]);
  }
  ngAfterContentChecked() {
    this.Log.debug('life parent ngAfterContentChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngAfterContentChecked' }]);
  }
  ngAfterViewInit() {
    this.Log.debug('life parent ngAfterViewInit');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngAfterViewInit' }]);
  }
  ngAfterViewChecked() {
    this.Log.debug('life parent ngAfterViewChecked');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngAfterViewChecked' }]);
  }
  ngOnDestroy() {
    this.Log.debug('life parent ngOnDestroy');
    this.LifeCycleSvc.pushLifeCycle([{ location: 'parent', lifeType: 'life parent ngOnDestroy' }]);
  }
}
