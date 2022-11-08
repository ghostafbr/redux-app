import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrandchildComponent} from "../grandchild/grandchild.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from "../counter.actions";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, GrandchildComponent],
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  public counter: number;

  constructor( private  store: Store<AppState> ) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.store.select('count').subscribe( counter => this.counter = counter );
  }

  multiply(): void {
    this.store.dispatch( actions.multiply({number: 2}) );
  }

  divide(): void {
    this.store.dispatch( actions.divide({number: 2}) );
  }

}
