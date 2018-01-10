import { FormControl } from '@angular/forms';
export function hasExclamationMark(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
}
export function CheckTaiwanID(input: FormControl) { // 身份證檢查函式
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
            return { identityValidate: true };
        }
    } else {
        return { identityValidate: true };
    }
}