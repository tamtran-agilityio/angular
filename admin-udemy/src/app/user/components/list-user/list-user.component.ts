import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';

import {
  MatTableDataSource,
  MatSort
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
export class ListUserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  users: User[];
  displayedColumns = ['select', 'id', 'fullName', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource<User>(users);
        this.cdr.markForCheck();
      });
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.cdr.markForCheck();
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

  deleteUser(event) {
  }

}
