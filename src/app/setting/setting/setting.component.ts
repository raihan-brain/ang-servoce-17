import {Component, OnInit} from '@angular/core';
import {LandService} from "../../dashboard/services/land.service";
import {DarkService} from "../../dashboard/services/dark.service";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit{
  msgFromService: string = "No message yet";
  msgFromDarkService: string = "No message yet";
  constructor(private landService: LandService, private darkService: DarkService) { }

  ngOnInit(): void {
    this.landService.getLands();
    this.msgFromService = this.landService.getMessageFromLandService();
    // did it create 2 instances of darkserivce ?

    // Yes, it will create two instances of `DarkService` - one for the `DashboardModule` and one for the `SettingModule`.
    // This is because the service is provided in the `providers` array of both modules. Each Angular module has its own injector,
    // and when a service is provided in a module, a new instance of the service is created for that module.
    // Therefore, the `DashboardModule` and the `SettingModule` will each have their own instance of `DarkService`.
    this.msgFromDarkService = this.darkService.sendDarkMsg();
  }


}
