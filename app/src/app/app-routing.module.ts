import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodesComponent } from './pages/nodes/components/nodes/nodes.component';
import { NodeEventsPageComponent } from './pages/node-events/components/node-events-page/node-events-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/nodes', pathMatch: 'full' },
    { path: 'nodes', component: NodesComponent },
    { path: 'nodes/:id', component: NodeEventsPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

// todo popup через material dialog
