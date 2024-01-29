import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import {DarkService} from "../dashboard/services/dark.service";


@NgModule({
  declarations: [],
  providers: [DarkService],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
