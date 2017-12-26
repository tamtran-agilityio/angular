import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';

import * as _ from 'lodash';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog
} from '@angular/material';
import {} from '@angular/material';
import {
  SelectionModel
} from '@angular/cdk/collections';

import {
  UserService
} from '@app/user/services/user.service';
import {
  LoggerDecorator
} from '@app/core/decorators/logger.decorator';
import {
  User
} from '@app/user/models/user';
import {
  AutoUnsubscribe
} from '@app/core/decorators/autounsubscribe.decorator';
import {
  AppConfigService
} from '@app/core/services/app-config.service';
import {
  AddUserComponent
} from '@app/user/components/add-user/add-user.component';
import {
  UserHelperService
} from '@app/user/services/user-helper.service';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@LoggerDecorator()
@AutoUnsubscribe()
export class ListUserComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  users: User[];
  displayedColumns = [];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);
  paginationOption: any;
  constructor(
    private userService: UserService,
    private userHelperService: UserHelperService,
    private cdr: ChangeDetectorRef,
    private appConfig: AppConfigService,
    private dialog: MatDialog
  ) {
    this.paginationOption = this.appConfig.PAGINATION_DEFAULT;
    this.displayedColumns = this.appConfig.TABLE_COLUMNS.USER;
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.paginationOption.length = users.length;
        this.getDataSource();
        this.cdr.markForCheck();
      });
  }

  /**
   * Handle filter value
   * @param filterValue the string fillter
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  /**
   * The total number of rows
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Selects all rows
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        this.selection.select(row);
      });
  }

  /**
   * Handle delete user
   * @param event value of row need delete
   */
  deleteUser(event) {
    this.userService.deteleUserById(event.id);
    this.users = this.userHelperService.deleteUsers(event, this.users);
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  openDialog() {
    const user: User = null;
    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.componentInstance.user = user;

    // Add new user
    dialogRef.componentInstance.userInfo.subscribe((userInfo) => {
      userInfo.id = this.userHelperService.getIdUser();
      this.users.push(userInfo);
      this.getDataSource();
      this.userService.createUser(userInfo);
    });
  }

  editUser(user: User) {
    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.componentInstance.user = user;

    // Edit new user
    dialogRef.componentInstance.userInfo.subscribe((userInfo) => {
      userInfo.id = user.id;
      this.users = this.userHelperService.updateUsers(userInfo, this.users);
      this.getDataSource();
      this.userService.updateUser(userInfo);
    });
  }

  getDataSource() {
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
