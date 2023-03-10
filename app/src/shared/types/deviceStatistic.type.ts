import { DeviceType } from './deviceType';

export interface DeviceStatistic {
    id: string;
    userName: string;
    statisticDate: Date;
    clientVersion: string;
    deviceType: DeviceType;
}
