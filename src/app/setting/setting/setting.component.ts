import {Component, OnInit} from '@angular/core';
import {LandService} from "../../dashboard/services/land.service";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit{
  msgFromService: string = "No message yet";
  constructor(private landService: LandService) { }

  ngOnInit(): void {
    this.landService.getLands();
    this.msgFromService = this.landService.getMessageFromLandService();
  }


}
