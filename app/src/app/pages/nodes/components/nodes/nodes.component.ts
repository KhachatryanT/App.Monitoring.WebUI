import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NodesService } from '../../../../shared/services/nodes.service';
import { Node } from '../../../../shared/types/node.type';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.component.html',
    providers: [DestroyService],
})
export class NodesComponent implements OnInit, OnDestroy {
    public dataSource$: Observable<Node[]>;
    public readonly displayedColumns: string[] = ['position', 'name', 'version', 'os'];

    constructor(
        private readonly nodesService: NodesService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.dataSource$ = this.nodesService.getNodesWithListener().pipe(takeUntil(this.ngUnsubscribe$));
    }

    navigateToEventsPage(node: Node): void {
        this.router.navigate([node.id], { relativeTo: this.route });
    }

    ngOnDestroy(): void {
        console.log('NodesComponent was destroyed');
    }
}
