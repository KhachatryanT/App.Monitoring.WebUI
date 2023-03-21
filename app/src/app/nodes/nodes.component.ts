import { Component, Inject, OnInit } from '@angular/core';
import { NodesService } from '../nodes.service';
import { Node } from '../../shared/types/node.type';
import { Observable, takeUntil } from 'rxjs';
import { DestroyService } from '../destroy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.component.html',
})
export class NodesComponent implements OnInit {
    public dataSource: MatTableDataSource<Node>;
    public readonly displayedColumns: string[] = ['position', 'name', 'version', 'os'];

    constructor(
        private readonly nodesService: NodesService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.nodesService
            .getNodes()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(nodes => (this.dataSource = new MatTableDataSource(nodes)));
    }

    navigateToEventsPage(node: Node) {
        this.router.navigate([node.id], { relativeTo: this.route });
    }
}
