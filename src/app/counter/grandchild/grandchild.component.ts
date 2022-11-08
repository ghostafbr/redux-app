import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {reset} from "../counter.actions";

@Component({
  selector: 'app-grandchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {
  public counter: number;

  constructor( private store: Store<AppState>) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.store.select('count').subscribe( counter => this.counter = counter );
  }

  reset(): void {
    this.store.dispatch( reset() );
  }

}
