import { Component, Inject, OnInit } from '@angular/core';
import { DevicesStatisticsService } from '../devicesStatistics.service';
import { DeviceStatistic } from '../../shared/types/deviceStatistic.type';
import { Observable, takeUntil } from 'rxjs';
import { DestroyService } from '../destroy.service';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
})
export class StatisticsComponent implements OnInit {
    public dataSource: DeviceStatistic[];

    public readonly displayedColumns: string[] = [
        'position',
        'userName',
        'statisticDate',
        'clientVersion',
        'deviceType',
    ];

    constructor(
        private readonly devicesStatisticsService: DevicesStatisticsService,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.devicesStatisticsService
            .getStatistics()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(statistics => (this.dataSource = statistics));
    }
}
