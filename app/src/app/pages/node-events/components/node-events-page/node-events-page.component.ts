import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';
import { DestroyService } from '../../../../shared/services/destroy.service';

@Component({
    selector: 'app-node-events-page',
    templateUrl: './node-events-page.component.html',
})
export class NodeEventsPageComponent implements OnInit {
    public id: string;

    constructor(
        private readonly route: ActivatedRoute,
        @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.route.paramMap.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.id = id;
            }
        });
    }
}
