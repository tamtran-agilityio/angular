import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';

import * as _ from 'lodash';
import {
  MatTableDataSource,
  MatSort,
  MatPaginator
} from '@angular/material';
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

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@LoggerDecorator()
export class ListUserComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  users: User[];
  displayedColumns = ['select', 'id', 'fullName', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
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
    const listUser = _.remove(this.users, (user) => {
      return user.id === event.id;
    });
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

}
