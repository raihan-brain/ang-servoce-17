import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DarkService} from "./services/dark.service";


@NgModule({
  declarations: [LandingPageComponent],
  providers: [DarkService],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
