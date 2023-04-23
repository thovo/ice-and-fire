import { Pipe, PipeTransform } from '@angular/core';
import { API_URL } from '../constants/api.constant';

@Pipe({
  name: 'getId'
})
export class GetIdPipe implements PipeTransform {

  // The API didn't provide the ID for each resource, 
  // this pipe is used inside table to get the ID for each resource
  transform(value: string, apiKey: string): string {
    const length = (API_URL + apiKey).length;
    return value.slice(length);
  }

}
