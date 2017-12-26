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
function CheckTaiwanID(input: FormControl) { // 身份證檢查函式
  // console.log('input: ', input);
  const userId = input.value;
  const reg = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;  // 身份證的正規表示式
  if (reg.test(userId)) {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ct = ['10', '11', '12', '13', '14', '15', '16', '17', '34', '18', '19', '20', '21',
      '22', '35', '23', '24', '25', '26', '27', '28', '29', '32', '30', '31', '33'];

    const i = s.indexOf(userId.charAt(0));
    const tempUserId = ct[i] + userId.substr(1, 9); // 若此身份證號若是A123456789=>10123456789
    let num = Number(tempUserId.charAt(0)) * 1;
    for (let x = 1; x <= 9; x++) {
      num = num + Number(tempUserId.charAt(x)) * (10 - x);
    }
    num += Number(tempUserId.charAt(10)) * 1;
    if ((num % 10) === 0) {
      return null;
    } else {
      return { needsIdExclamation: true };
    }
  } else {
    return { needsIdExclamation: true };
  }
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
  identity: FormControl;
  constructor(builder: FormBuilder) {
    // user name驗證
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    // password 驗證
    this.password = new FormControl('', [
      Validators.required,
      hasExclamationMark
    ]);
    // 身分證字號驗證
    this.identity = new FormControl('', [
      Validators.required,
      CheckTaiwanID
    ]);
    this.loginForm = builder.group({
      username: this.username,
      password: this.password,
      identity: this.identity
    });
    // 用來觀察表格元素的變化
    this.loginForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    });
  }

  ngOnInit() {

  }
  login(value: any) {
    console.log('value: ', value);
    // Attempt Logging in...
  }

}
