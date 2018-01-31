import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// validation
import { hasExclamationMark, CheckTaiwanID } from '../../shared/common/validation';
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

  customFieldValid(field: string, validkey: string, validInfo?: string) {
    if (!validInfo) {
      return this.loginForm.get(field)[validkey];
    } else {
      return this.loginForm.get(field)[validkey](validInfo);
    }
  }

  isMinLenght(field: string): boolean {
    return this.customFieldValid(field, 'hasError', 'minlength');
  }

  isRequired(field: string): boolean {
    return this.customFieldValid(field, 'hasError', 'required');
  }

  isValidRequired(field: string): boolean {
    return (this.customFieldValid(field, 'dirty') && this.isRequired(field)) || (this.customFieldValid(field, 'touched') && this.isRequired(field));
  }

  isCustomValid(field: string, validkey: string) {
    return this.customFieldValid(field, 'hasError', validkey) && this.customFieldValid(field, 'dirty') && !this.isRequired(field)
  }

  validUserName(field: string) {
    return {
      'required': this.isValidRequired(field),
      'minlenght': this.isMinLenght(field)
    };
  }

  validPassword(field: string) {
    return {
      'required': this.isValidRequired(field),
      'customValid': this.isCustomValid(field, 'needsExclamation')
    };
  }

  validName(field: string) {
    return {
      'required': this.isValidRequired(field),
      'customValid': this.isCustomValid(field, 'nameValidate')
    };
  }

  validIdentity(field: string) {
    return {
      'required': this.isValidRequired(field),
      'customValid': this.isCustomValid(field, 'identityValidate')
    };
  }

  isFieldValid(field: string): boolean {
    return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
    };
  }

  // form submit
  onSubmit(value: any): void {
    this.log.debug(value);
  }

  ngOnInit() {
    // 用來觀察表格元素的變化
    this.loginForm.valueChanges.subscribe((form: any) => {
      this.log.debug(form);
    });
  }
}
