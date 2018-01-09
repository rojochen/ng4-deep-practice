import { Directive, Input, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Name格式驗證Directive
 */
@Directive({
  selector: '[nameValidate][formControlName],[nameValidate][formControl],[nameValidate][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NameValidatorDirective),
    multi: true
  }]
})
export class NameValidatorDirective implements Validator {

  constructor(
    @Attribute('nameValidate') public nameType: string
  ) { }

  /**
   * Name驗證邏輯
   * @param c
   */
  validate(c: AbstractControl): { [key: string]: any } {
    const value = c.value;
    const e = c.parent;
    let validate;

    if (e && value) {
      const regexRule = this.checkRegexRule();
      if (regexRule.test(value)) {
        validate = null;
      } else {
        validate = {nameValidate: true};
      }
    }
    return validate;
  }

  /**
   * 要使用的正則式
   * en：只能輸入英文 / ch：只能輸入中文 / default：能輸入中英文
   */
  checkRegexRule() {
    switch (this.nameType) {
      case 'en':
        return /^[a-zA-Z][a-zA-Z\,/-\s]+$/;
      case 'ch':
        return /^[\u4e00-\u9fa5]+$/;
      default:
        return /^[\u4e00-\u9fa5a-zA-Z]+$/;
    }
  }
}
