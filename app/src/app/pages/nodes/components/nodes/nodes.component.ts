import { Component, Inject, OnInit } from '@angular/core';
import { Node } from '../../../../shared/types/node.type';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NodesListenerService } from '../../../../shared/services/nodes-listener.service';
import { SignalrService } from '../../../../shared/services/signalr.service';

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.component.html',
    providers: [DestroyService, NodesListenerService, SignalrService],
})
export class NodesComponent implements OnInit {
    public dataSource$: Observable<Node[]>;
    public readonly displayedColumns: string[] = ['position', 'name', 'version', 'os'];

    constructor(
        private readonly nodesListenerService: NodesListenerService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.dataSource$ = this.nodesListenerService.getNodes().pipe(takeUntil(this.ngUnsubscribe$));
    }

    navigateToEventsPage(node: Node): void {
        this.router.navigate([node.id], { relativeTo: this.route });
    }
}
