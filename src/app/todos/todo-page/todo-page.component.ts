import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completados: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completados = !this.completados;
    this.store.dispatch(action.toggleALl({ completado: this.completados }));
  }
}
