import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

function hasExclamationMark(input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;

  return hasExclamation ? null : { needsExclamation: true };
}

@Component({
  selector: 'app-check-tw-id',
  templateUrl: './check-tw-id.component.html',
  styleUrls: ['./check-tw-id.component.css']
})
export class CheckTwIdComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor(builder: FormBuilder) {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.password = new FormControl('', [Validators.required, hasExclamationMark]);
    this.loginForm = builder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {

  }
  login() {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }

}
