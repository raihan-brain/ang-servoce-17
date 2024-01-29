import {Component, OnInit} from '@angular/core';
import {LandService} from "../services/land.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  msgFromService: string = "No message yet";
  constructor(private landService: LandService) { }

  ngOnInit(): void {
    this.landService.getLands();
    this.msgFromService = this.landService.getMessageFromLandService();
  }

}
