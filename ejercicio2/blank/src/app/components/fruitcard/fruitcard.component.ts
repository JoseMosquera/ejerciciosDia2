import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruitcard',
  templateUrl: './fruitcard.component.html',
  styleUrls: ['./fruitcard.component.scss'],
})
export class FruitcardComponent implements OnInit {

  @Input() readonly fruit: Fruit = null;
  @Output() private deletedPressed = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {}

  buttonDeletePressed() {
    this.deletedPressed.emit(12);
  }
}
