import { Injectable } from '@angular/core';
import { Node } from '../types/node.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SignalrService } from './signalr.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class NodesListenerService {
    private readonly basePath = environment.nodesApiUrl;

    constructor(private readonly http: HttpClient, private readonly signalrService: SignalrService) {
        this.signalrService.addNodeModifiedListener();
    }

    public getNodes(): Observable<Node[]> {
        return this.signalrService.nodesModified$.pipe(
            switchMap(() => this.http.get<Node[]>(`${this.basePath}/nodes`)),
        );
    }
}
