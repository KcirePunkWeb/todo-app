import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Observable } from 'rxjs';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  $todos: Observable<Todo[]>;
  filtroActual: Observable<filtrosValidos>;

  constructor(private store: Store<AppState>) {
    this.$todos = store.select('todos');
    this.filtroActual = store.select('filtros');
    // store.select('filtros').subscribe((filtro) => (this.filtroActual = filtro));
  }

  ngOnInit(): void {}
}
