import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userList = [];
    // 透過resolve 取回的資料 需藉由snapshot 來獲得
    // src/app/core/service/user.service.ts
    this.userList = this.activatedRoute.snapshot.data['userList'];
  }
  jumpToUserInfo(id: number): void {
    this.router.navigate(['/resolve/user-info/', id]);
  }
}
