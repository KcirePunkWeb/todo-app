import { createReducer, on } from '@ngrx/store';
import {
  crear,
  toggle,
  editar,
  borrar,
  toggleALl,
  borrarCompletado,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Buscar las gemas'),
  new Todo('Culiarme a la viuda negra'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(toggleALl, (state, { completado }) => {
    return state.map((todo) => ({
      ...todo,
      completado,
    }));
  }),
  on(borrarCompletado, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
