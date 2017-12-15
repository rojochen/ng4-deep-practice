import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-check-tw-id',
  templateUrl: './check-tw-id.component.html',
  styleUrls: ['./check-tw-id.component.css']
})
export class CheckTwIdComponent implements OnInit {
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  TwID: string = ''
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'TwID': [null, Validators.compose([Validators.required, Validators.maxLength(10)])]
    });
  }
  addPost(post) {
    this.TwID = post.TwID;
  }

}
