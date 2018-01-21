import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreRouteService } from '../../core/service/core-route.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInfo: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coreRouteSvc: CoreRouteService
  ) { }

  ngOnInit() {
    this.userInfo = this.activatedRoute.snapshot.data['userInfo'];
  }
  goToBack(): void {
    this.coreRouteSvc.goToBack();
  }

}
