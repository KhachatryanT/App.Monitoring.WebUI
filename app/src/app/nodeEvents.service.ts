import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetNodeEventsResponse } from '../shared/types/getNodeEventsResponse.type';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NodeEventsService {
    private readonly basePath = environment.nodesApiUrl;

    constructor(private readonly http: HttpClient) {}

    public getNodeEvents(nodeId: string): Observable<GetNodeEventsResponse> {
        return this.http.get<GetNodeEventsResponse>(`${this.basePath}/nodes/${nodeId}/events`);
    }
}
