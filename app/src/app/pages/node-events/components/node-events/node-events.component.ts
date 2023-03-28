import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NodeEvent } from '../../../../shared/types/node-event.type';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { map, Observable, takeUntil, EMPTY, take } from 'rxjs';
import { NodeEventsService } from '../../../../shared/services/node-events.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-node-events',
    templateUrl: './node-events.component.html',
    providers: [DestroyService],
})
export class NodeEventsComponent implements OnInit {
    @Input() public nodeId: string;
    public dataSource: MatTableDataSource<NodeEvent>;
    public dataSource$: Observable<NodeEvent[]>;
    public readonly displayedColumns: string[] = ['date', 'name'];
    @ViewChild('empTbSort') empTbSort = new MatSort();
    public isAutoRefreshEnabled = false;

    constructor(
        private readonly nodeEventsService: NodeEventsService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.dataSource$ = this.isAutoRefreshEnabled ? this.getNodeEventsListener() : this.getNodeEvents();
    }

    private getNodeEvents(): Observable<NodeEvent[]> {
        return this.getNodeEventsListener().pipe(take(1));
    }

    private getNodeEventsListener(): Observable<NodeEvent[]> {
        return (this.dataSource$ = this.nodeEventsService.getNodeEvents(this.nodeId).pipe(
            map(x => x.events),
            takeUntil(this.ngUnsubscribe$),
        ));
    }

    toggleAutoRefresh(): void {
        if (this.isAutoRefreshEnabled) {
            this.dataSource$ = this.getNodeEventsListener();
        } else {
            this.dataSource$ = EMPTY;
        }
    }
}
