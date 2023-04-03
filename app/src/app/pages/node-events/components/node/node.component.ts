import { Component, Inject, Input, OnInit } from '@angular/core';
import { Node } from '../../../../shared/types/node.type';
import { NodesService } from '../../../../shared/services/nodes.service';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { Observable, takeUntil } from 'rxjs';

@Component({
    selector: 'app-node',
    templateUrl: './node.component.html',
    providers: [DestroyService],
})
export class NodeComponent implements OnInit {
    @Input() public id: string;
    public node: Node;

    constructor(
        private readonly nodesService: NodesService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.nodesService
            .getNode(this.id)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(node => (this.node = node));
    }
}
