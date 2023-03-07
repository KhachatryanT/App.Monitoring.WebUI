import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NodesComponent} from "./nodes/nodes.component";
import {NodeDetailsComponent} from "./node-details/node-details.component";

const routes: Routes = [
  {path:"/nodes", component: NodesComponent},
  {path:"/nodes/:id", component: NodeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// todo popup через material dialog
