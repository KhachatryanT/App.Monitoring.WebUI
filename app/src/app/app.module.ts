import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import { MainComponent } from './main/main.component';
import {DevicesStatisticsService} from "./devicesStatistics.service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {DeviceTypeEnumDescriptionPipe} from "../shared/pipes/deviceTypeEnumDescription.pipe";
import {StatisticsComponent} from "./statistics/statistics.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StatisticsComponent,
    DeviceTypeEnumDescriptionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    CommonModule
  ],
  providers: [DevicesStatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
