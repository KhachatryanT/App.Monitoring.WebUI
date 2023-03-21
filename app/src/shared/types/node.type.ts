import { DeviceType } from './deviceType';

export interface Node {
    id: string;
    name: string;
    version: string;
    os: DeviceType;
}
