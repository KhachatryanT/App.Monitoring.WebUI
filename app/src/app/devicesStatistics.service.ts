import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceStatistic} from "../shared/types/deviceStatistic.type";

@Injectable({
  providedIn: 'root'
})
export class DevicesStatisticsService {
  // todo move basePath to env
  private readonly basePath = "https://localhost:7108";

  constructor(private readonly http: HttpClient) {
  }

  public getStatistics(): Observable<DeviceStatistic[]> {
    return this.http.get<DeviceStatistic[]>(`${this.basePath}/statistics`);
  }
}
