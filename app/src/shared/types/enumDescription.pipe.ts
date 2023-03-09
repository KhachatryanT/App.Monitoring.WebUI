import { Pipe, PipeTransform } from '@angular/core';
import {DeviceType} from "./deviceType";

@Pipe({
  name: 'enumDescription'
})
export class EnumDescriptionPipe implements PipeTransform {
  transform<T>(value: number, args?: any): string {
    let res = DeviceType[value];
    return res;
  }
}
