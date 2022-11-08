import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.counter = 0;
    this.counterChange.emit(0);
  }

}
