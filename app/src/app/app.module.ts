import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import { MainComponent } from './main/main.component';
import { NodeEditComponent } from './node-edit/node-edit.component';
import {NodeService} from "./node.service";
import {HttpClientModule} from "@angular/common/http";
import { NodeDetailsComponent } from './node-details/node-details.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeTableItemComponent } from './node-table-item/node-table-item.component';
import { NodeCreateComponent } from './node-create/node-create.component';
import { ComponentBaseComponent } from './component-base/component-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NodeEditComponent,
    NodeDetailsComponent,
    NodesComponent,
    NodeTableItemComponent,
    NodeCreateComponent,
    ComponentBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
