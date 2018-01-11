import { Component, OnInit, Inject } from '@angular/core';
import { JsonPlaceholderService, User } from '../../core/service/json-placeholder.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: JsonPlaceholderService
  ) {
    console.log(this.api);
  }

  ngOnInit() {
    this.api.getAllUser().subscribe(res => {
      console.log(res);
    })
    // console.log('this.api.getAllUser(): ', this.api.getAllUser());
  }

}
