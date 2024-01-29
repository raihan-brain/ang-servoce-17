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

    // but I didnot import dashboard module in setting module how is this working ?

    // The DarkService is working in the SettingModule because you have provided it in the SettingModule itself.
    // When you provide a service in a module, Angular's dependency injection system makes that service available to any component,
    // directive, or pipe that is part of that module.  In your case, you have provided DarkService in the SettingModule:

    // This means that DarkService is available to any component, directive, or pipe that is part of the SettingModule.
    // It doesn't matter whether DashboardModule is imported into SettingModule or not.
    // As long as DarkService is provided in the SettingModule, it can be injected into any component,
    // directive, or pipe in SettingModule.  In your SettingComponent, you are injecting DarkService:
    this.msgFromDarkService = this.darkService.sendDarkMsg();
  }


}
