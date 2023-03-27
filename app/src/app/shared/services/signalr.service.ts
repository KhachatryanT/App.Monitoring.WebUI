import { Injectable, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HubConnectionState } from '@microsoft/signalr';

@Injectable({
    providedIn: 'root',
})
export class SignalrService implements OnDestroy {
    private readonly basePath = environment.nodesApiUrl;

    private hubConnection: signalR.HubConnection;
    public nodesModified$ = new BehaviorSubject<void>(undefined);

    constructor() {
        if (!this.isConnected()) {
            this.Connect();
        }
    }

    private isConnected(): boolean {
        return (
            this.hubConnection &&
            (this.hubConnection.state === HubConnectionState.Connecting ||
                this.hubConnection.state === HubConnectionState.Connected)
        );
    }

    private Connect(): void {
        this.hubConnection = new signalR.HubConnectionBuilder().withUrl(`${this.basePath}/Notification`).build();
        this.hubConnection
            .start()
            .then(() => console.log('WS connection started'))
            .catch((err: any) => console.log('Error while starting ws connection: ' + err));
    }

    public addNodeModifiedListener(): void {
        this.hubConnection.on('NodesModified', () => {
            this.nodesModified$.next();
        });
    }

    ngOnDestroy(): void {
        this.hubConnection
            .stop()
            .then(() => console.log('WS connection stopped'))
            .catch(err => console.log('Error while stopping ws connection: ' + err));
        this.nodesModified$.complete();
        console.log('Connection was destroyed');
    }
}
