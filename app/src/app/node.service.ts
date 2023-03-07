import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private readonly http: HttpClient) { }

  public getNodes(): Observable<Node[]> {
    return this.http.get<Node[]>('/nodes');
  }

  public getNode(deviceId: string): Observable<Node> {
    return this.http.get<Node>(`/nodes/${deviceId}`);
  }

  public updateNode(node:Node): Observable<Object> {
    return this.http.post("", {});
  }

}
