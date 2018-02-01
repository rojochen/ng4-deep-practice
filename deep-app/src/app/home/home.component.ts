import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

}
