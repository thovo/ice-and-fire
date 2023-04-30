import { Pipe, PipeTransform } from '@angular/core';
import { getId } from '../utils/api.utils';

@Pipe({
  name: 'getId'
})
export class GetIdPipe implements PipeTransform {

  // The API didn't provide the ID for each resource, 
  // this pipe is used inside table to get the ID for each resource
  transform(value: string, apiKey: string = ''): string {
    return getId(value, apiKey);
  }

}
