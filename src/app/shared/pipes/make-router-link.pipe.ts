import { Pipe, PipeTransform } from '@angular/core';
import { API_URL } from '../constants/api.constant';

@Pipe({
  name: 'makeRouterLink'
})
export class MakeRouterLinkPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(API_URL.length);
  }

}
