import { Injectable } from '@angular/core';
import { Node } from '../shared/types/node.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NodesService {
    private readonly basePath = 'https://localhost:7108';

    constructor(private readonly http: HttpClient) {}

    public getNodes(): Observable<Node[]> {
        return this.http.get<Node[]>(`${this.basePath}/nodes`);
    }

    public getNode(id: string): Observable<Node> {
        return this.http.get<Node>(`${this.basePath}/nodes/${id}`);
    }
}
