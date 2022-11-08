import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ChildComponent} from "./counter/child/child.component";

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

  constructor() {
    this.counter = 10;
  }

  increment (): void {
    this.counter++;
  }

  decrement (): void {
    this.counter--;
  }
}
