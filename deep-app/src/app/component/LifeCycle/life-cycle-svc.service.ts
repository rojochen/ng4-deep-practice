import { Injectable } from '@angular/core';

export interface ILifeCycleInfo {
  location: string;
  lifeType: string;
}

@Injectable()
export class LifeCycleSvcService {
  LifeCycleList: ILifeCycleInfo[] = [];
  constructor() { }
  pushLifeCycle(data: any): void {
    Array.prototype.push.apply(this.LifeCycleList, data);
  }
  getLifeCycleList(): ILifeCycleInfo[] {
    return this.LifeCycleList;
  }
}
