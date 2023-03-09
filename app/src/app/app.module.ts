import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import { MainComponent } from './main/main.component';
import {DevicesStatisticsService} from "./devicesStatistics.service";
import {HttpClientModule} from "@angular/common/http";
import { StatisticsComponent } from '././statistics/statistics.component';
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {EnumDescriptionPipe} from "../shared/types/enumDescription.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StatisticsComponent,
    EnumDescriptionPipe,
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
