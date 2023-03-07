import { Component } from '@angular/core';
import {NodeService} from "../node.service";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent {

  public readonly nodes$ = this.nodeService.getNodes();
  constructor(private readonly nodeService: NodeService) {
  }

}
