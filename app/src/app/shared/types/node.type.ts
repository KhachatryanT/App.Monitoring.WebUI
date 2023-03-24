import { DeviceType } from './device-type';

export interface Node {
    id: string;
    name: string;
    version: string;
    os: DeviceType;
}
