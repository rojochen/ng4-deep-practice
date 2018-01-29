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
    this.http.get('http://localhost:2003/habbits').subscribe(res => {
      console.log(res);
    });
    this.http.get('http://localhost:2003/departments').delay(100).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
