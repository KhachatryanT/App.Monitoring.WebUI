import { Injectable } from '@angular/core';
import { Node } from '../types/node.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SignalrService } from './signalr.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NodesService {
    private readonly basePath = environment.nodesApiUrl;

    constructor(private readonly http: HttpClient, private readonly signalrService: SignalrService) {}

    public getNodesWithListener(): Observable<Node[]> {
        this.signalrService.addNodeModifiedListener();

        return this.signalrService.nodesModified$.pipe(
            switchMap(() => this.http.get<Node[]>(`${this.basePath}/nodes`)),
        );
    }

    public getNode(id: string): Observable<Node> {
        return this.http.get<Node>(`${this.basePath}/nodes/${id}`);
    }
}
