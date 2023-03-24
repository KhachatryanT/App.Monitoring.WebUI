import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NodeEvent } from '../../../../shared/types/node-event.type';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { Observable, takeUntil } from 'rxjs';
import { NodeEventsService } from '../../../../shared/services/node-events.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-node-events',
    templateUrl: './node-events.component.html',
})
export class NodeEventsComponent implements OnInit {
    @Input() public nodeId: string;
    public dataSource: MatTableDataSource<NodeEvent>;
    public readonly displayedColumns: string[] = ['date', 'name'];
    @ViewChild('empTbSort') empTbSort = new MatSort();

    constructor(
        private readonly nodeEventsService: NodeEventsService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.nodeEventsService
            .getNodeEvents(this.nodeId)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(nodeEvents => {
                this.dataSource = new MatTableDataSource(nodeEvents.events);
                this.dataSource.sort = this.empTbSort;
            });
    }
}
