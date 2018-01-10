import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// validation
import { hasExclamationMark, CheckTaiwanID } from '../../shared/validation';
// log service
import { LoggerService } from '../../core/service/logger.service';
import { debug } from 'util';

@Component({
  selector: 'app-check-tw-id',
  templateUrl: './check-tw-id.component.html',
  styleUrls: ['./check-tw-id.component.css']
})
export class CheckTwIdComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private log: LoggerService
  ) {
    // loginForm group
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      password: ['', [
        Validators.required,
        hasExclamationMark
      ]],
      name: ['', [
        Validators.required,
      ]],
      identity: ['', [
        Validators.required,
        CheckTaiwanID
      ]]
    });

  }

  ngOnInit() {
    // 用來觀察表格元素的變化
    this.loginForm.valueChanges.subscribe((form: any) => {
      this.log.debug(form)
    });
  }
  // form 送出
  login(value: any) {
    this.log.debug(value);
    // Attempt Logging in...
  }

}
