import {DeviceType} from "./deviceType";

export interface Node {
  name: string;
  date: Date;
  clientVersion: string;
  deviceType: DeviceType;
}
