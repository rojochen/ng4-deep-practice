import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPlaceholderService, User } from '../../core/service/json-placeholder.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
  userLogin: FormGroup;
  return: string = '';
  userList: User[];
  messageFlag: boolean;
  constructor(
    private api: JsonPlaceholderService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.api.getAllUser().subscribe(res => {
      this.userList = res;
    });
  }
  login(value: any) {
    if (value.username === 'Louis' || value.password === '123456') {
      localStorage.setItem('login', 'ok');
      this.router.navigate(['/resolve/user']);
    } else {
      this.userLogin.reset();
    }
  }
}
