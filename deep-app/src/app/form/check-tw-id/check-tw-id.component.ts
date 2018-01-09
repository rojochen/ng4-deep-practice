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
// validation
import { hasExclamationMark, CheckTaiwanID } from '../../shared/validation';

// log service
import { LoggerService } from '../../core/service/logger.service';


@Component({
  selector: 'app-check-tw-id',
  templateUrl: './check-tw-id.component.html',
  styleUrls: ['./check-tw-id.component.css']
})
export class CheckTwIdComponent implements OnInit {
  loginForm: FormGroup;
<<<<<<< HEAD
  constructor(builder: FormBuilder) {
=======
  constructor(
    private builder: FormBuilder,
    private log: LoggerService
  ) {
>>>>>>> restructure
    // loginForm group
    this.loginForm = builder.group({
      username: new FormControl('', [
        Validators.required, // 為必填
        Validators.minLength(5) //最短長度為5
      ]),
      password: new FormControl('', [
        Validators.required, //為必填
        hasExclamationMark // 自定義的驗證
      ]),
<<<<<<< HEAD
=======
      name: new FormControl('', [
        Validators.required,
      ]),
>>>>>>> restructure
      identity: new FormControl('', [
        Validators.required, // 為必填
        CheckTaiwanID //自定義的驗證
      ])
    });
    // 用來觀察表格元素的變化
    // this.loginForm.valueChanges.subscribe((form: any) => {
    //   this.log.debug(form)
    // });
  }

  ngOnInit() {

  }
  // form 送出
  login(value: any) {
    this.log.debug(value);
    // Attempt Logging in...
  }

}
