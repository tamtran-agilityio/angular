import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '@app/todo/models/todo';
import * as _ from 'lodash';
import * as fromTodosStore from '@app/todo/store';
import * as todoActions from '@app/todo/store/todo.actions';
import { TodoService } from '@app/todo/services/todo.service';
import * as Immutable from 'seamless-immutable';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(
    private store: Store<fromTodosStore.State>,
    private cdr: ChangeDetectorRef,
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new todoActions.LoadAction());
    this.store.select(fromTodosStore.getEntitiesArray).subscribe((res: Todo[]) => {
      this.todos = res;
      this.cdr.markForCheck();
    });
  }

}
