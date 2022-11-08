import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrandchildComponent} from "../grandchild/grandchild.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, GrandchildComponent],
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  multiply(): void {
    this.counter *= 2;
    this.counterChange.emit(this.counter);
  }

  divide(): void {
    this.counter /= 2;
    this.counterChange.emit(this.counter);
  }

  resetGrandChild( newCounter: any ): void {
    this.counter = newCounter;
    this.counterChange.emit(0);
  }

}
