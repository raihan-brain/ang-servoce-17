import {Component, OnInit} from '@angular/core';
import {LandService} from "../services/land.service";
import {DarkService} from "../services/dark.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  msgFromService: string = "No message yet";
  anotherMsgFromService: string = "No message yet";
  constructor(private landService: LandService, private darkService: DarkService) { }

  ngOnInit(): void {
    this.landService.getLands();
    this.msgFromService = this.landService.getMessageFromLandService();
    this.anotherMsgFromService = this.darkService.sendDarkMsg();
  }

}
