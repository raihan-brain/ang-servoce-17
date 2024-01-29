import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() {
    console.log("LandService constructor called");
  }

  getLands() {
    console.log("LandService getLands called");
  }

  getMessageFromLandService() {
   return "Hello from LandService";
  }
}
