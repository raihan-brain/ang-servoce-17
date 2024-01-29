import { Injectable } from '@angular/core';

@Injectable()
export class DarkService {

  constructor() {
    console.log("====== DarkService ======");
  }

  sendDarkMsg() {
   return "===== msg from dark service =====";
  }
}
