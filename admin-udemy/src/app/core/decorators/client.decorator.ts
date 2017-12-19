import {
  ClientService
} from '@app/core/services/client.service';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subject
} from 'rxjs/Subject';


export function ClientDecorator(animations: any) {
  return function(target: Function) {
    target.prototype.getUser = function() {
      return {};
    };
    console.log('target', target.prototype.constructor);
    return target;
  };
}
