import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';
import {
  MatDialogRef,
  MatDialog
} from '@angular/material';
import {
  AddUserComponent
} from '@app/user/components/add-user/add-user.component';
import {
  User
} from '@app/user/models/user';

@Injectable()
export class UserDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * Handle show dialog modal
   * @param user info user
   */
  confirm(user: User): Observable<boolean> {
    let dialogRef: MatDialogRef<AddUserComponent>;
    dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.componentInstance.user = user;
    return dialogRef.afterClosed();
  }

}
