import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DeviceTypeEnumDescriptionPipe } from './shared/pipes/device-type-enum-description.pipe';
import { NodesService } from './shared/services/nodes.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NodeEventsPageComponent } from './pages/node-events/components/node-events-page/node-events-page.component';
import { NodesComponent } from './pages/nodes/components/nodes/nodes.component';
import { NodeComponent } from './pages/node-events/components/node/node.component';
import { NodeEventsComponent } from './pages/node-events/components/node-events/node-events.component';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        CommonModule,
        MatSortModule,
        BrowserAnimationsModule,
    ],
    providers: [NodesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
