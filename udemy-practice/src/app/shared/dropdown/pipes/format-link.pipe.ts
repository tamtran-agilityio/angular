import { Pipe, PipeTransform } from '@angular/core';

import * as _ from  'lodash';

@Pipe({
  name: 'formatLink'
})
export class FormatLinkPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return _.join(_.split( _.lowerCase(value), ' '), '-');
  }
}
