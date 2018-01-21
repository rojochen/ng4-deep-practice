import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
@Injectable()
export class CoreRouteService {

  constructor(
    private location: Location
  ) { }
  goToBack(): void {
    this.location.back();
  }
}
