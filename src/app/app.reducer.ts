import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todos/todo.recuder';
import { filtroReducer } from './filtro/filtro.reducer';

import { filtrosValidos } from './filtro/filtro.actions';

export interface AppState {
  todos: Todo[];
  filtros: filtrosValidos;
}

export const AppReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtros: filtroReducer,
};
