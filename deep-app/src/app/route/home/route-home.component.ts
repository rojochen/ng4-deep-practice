import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPlaceholderService, User } from '../../core/service/json-placeholder.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
  userLogin: FormGroup;
  constructor(
    private api: JsonPlaceholderService,
    private fb: FormBuilder
  ) {
    this.userLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // this.api.getAllUser().subscribe(res => {
    //   console.log(res);
    // })
    // console.log('this.api.getAllUser(): ', this.api.getAllUser());
  }
  // form 送出
  login(value: any) {
    // Attempt Logging in...
  }
}
