import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NodeEvent } from '../../../../shared/types/node-event.type';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { map, Observable, takeUntil, EMPTY } from 'rxjs';
import { NodeEventsService } from '../../../../shared/services/node-events.service';
import { MatSort } from '@angular/material/sort';
import { NodeEventsListenerService } from '../../../../shared/services/node-events-listener.service';

@Component({
    selector: 'app-node-events',
    templateUrl: './node-events.component.html',
    providers: [DestroyService, NodeEventsListenerService],
})
export class NodeEventsComponent implements OnInit {
    @Input() public nodeId: string;
    public readonly displayedColumns: string[] = ['date', 'name'];
    @ViewChild('empTbSort') empTbSort = new MatSort();
    public isAutoRefreshEnabled = true;
    public dataSource$: Observable<NodeEvent[]>;

    constructor(
        private readonly nodeEventsService: NodeEventsService,
        private readonly nodeEventsListenerService: NodeEventsListenerService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.dataSource$ = this.isAutoRefreshEnabled ? this.getNodeEventsListener() : this.getNodeEvents();
    }

    private getNodeEvents(): Observable<NodeEvent[]> {
        return this.nodeEventsService.getNodeEvents(this.nodeId).pipe(
            map(x => x.events),
            takeUntil(this.ngUnsubscribe$),
        );
    }

    private getNodeEventsListener(): Observable<NodeEvent[]> {
        return (this.dataSource$ = this.nodeEventsListenerService.getNodeEvents(this.nodeId).pipe(
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
