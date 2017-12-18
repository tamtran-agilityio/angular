import {
  Injectable
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {
  ClientDecorator
} from '@app/core/decorators/client.decorator';
import {
  ClientService
} from '@app/core/services/client.service';

@Injectable()
@ClientDecorator({
  restFulName: 'User',
  api: 'http://localhost:8000'
})
export class UserService extends ClientService {

}
