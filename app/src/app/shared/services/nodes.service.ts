import { Injectable } from '@angular/core';
import { Node } from '../types/node.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NodesService {
    private readonly basePath = environment.nodesApiUrl;

    constructor(private readonly http: HttpClient) {}

    public getNode(id: string): Observable<Node> {
        return this.http.get<Node>(`${this.basePath}/nodes/${id}`);
    }
}
