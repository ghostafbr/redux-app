import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ChildComponent} from "./counter/child/child.component";
import {Store} from "@ngrx/store";
import  * as actions from "./counter/counter.actions";
import {AppState} from "./app.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, ChildComponent]
})
export class AppComponent {
  counter: number;
  title = 'redux-app';

  constructor( private store: Store<AppState>) {
    this.counter = 10;

/*    this.store.subscribe( state => {
      console.log('State: ', state);
      this.counter = state.count;
    });*/
    this.store.select('count').subscribe( count => this.counter = count );

  }

  increment (): void {
    // this.counter++;
    this.store.dispatch( actions.increment() );
  }

  decrement (): void {
    // this.counter--;
    this.store.dispatch( actions.decrement() );
  }
}
