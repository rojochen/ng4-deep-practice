import { Injectable } from '@angular/core';

import { ALogger } from '../model/ALogger';

@Injectable()
export class LoggerService implements ALogger {

  constructor() { }
  debug(msg) {
    console.log(msg);
  }
  error(msg) {
    console.error(msg);
  }

}
