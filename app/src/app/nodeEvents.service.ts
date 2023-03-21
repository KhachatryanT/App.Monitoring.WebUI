import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetNodeEventsResponse } from '../shared/types/getNodeEventsResponse.type';

@Injectable({
    providedIn: 'root',
})
export class NodeEventsService {
    // move basePath to env
    private readonly basePath = 'https://localhost:7108';

    constructor(private readonly http: HttpClient) {}

    public getNodeEvents(nodeId: string): Observable<GetNodeEventsResponse> {
        return this.http.get<GetNodeEventsResponse>(`${this.basePath}/nodes/${nodeId}/events`);
    }
}
