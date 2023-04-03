import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';
import { GetNodeEventsResponse } from '../types/get-node-events-response.type';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NodeEventsService {
    private readonly basePath = environment.nodesApiUrl;
    private readonly longPollingIntervalInSec = environment.longPollingIntervalInSec;

    constructor(private readonly http: HttpClient) {}

    public getNodeEvents(nodeId: string): Observable<GetNodeEventsResponse> {
        return timer(0, this.longPollingIntervalInSec * 1000).pipe(
            switchMap(() => this.http.get<GetNodeEventsResponse>(`${this.basePath}/nodes/${nodeId}/events`)),
        );
    }
}
