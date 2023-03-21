import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DeviceTypeEnumDescriptionPipe } from '../shared/pipes/deviceTypeEnumDescription.pipe';
import { NodesService } from './nodes.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NodeEventsPageComponent } from './node-events-page/node-events-page.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeComponent } from './node/node.component';
import { NodeEventsComponent } from './node-events/node-events.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        NodesComponent,
        DeviceTypeEnumDescriptionPipe,
        NodeEventsPageComponent,
        NodeComponent,
        NodeEventsComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatTableModule, CommonModule, MatSortModule],
    providers: [NodesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
