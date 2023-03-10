import {Pipe, PipeTransform} from '@angular/core';
import {DeviceType} from "../types/deviceType";

@Pipe({
  name: 'deviceTypeEnumDescription'
})
export class DeviceTypeEnumDescriptionPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    const deviceType:string = typeof value === 'number'
      ? DeviceType[value]
      : value;

    return deviceType == DeviceType[DeviceType.Unknown] ? "" : deviceType;
  }
}
