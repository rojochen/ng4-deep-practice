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
import { LoggerService } from '../../service/logger.service';
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
  StudentInfo: Array<{ id: number, name: string }>;
  constructor(private Log: LoggerService) {
    this.Log.debug('life parent constructor');
  }
  ngOnChanges() {
    this.Log.debug('life parent ngOnChanges');
  }
  ngOnInit() {
    this.Log.debug('life parent ngOnInit');
    this.StudentInfo = [
      {
        id: 1,
        name: 'Louis'
      }
    ];
  }
  ngDoCheck() {
    this.Log.debug('life parent ngDoCheck');
  }
  ngAfterContentInit() {
    this.Log.debug('life parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.Log.debug('life parent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.Log.debug('life parent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.Log.debug('life parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.Log.debug('life parent ngOnDestroy');
  }
}
