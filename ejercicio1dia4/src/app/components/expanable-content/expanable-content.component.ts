import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-expanable-content',
  templateUrl: './expanable-content.component.html',
  styleUrls: ['./expanable-content.component.scss'],
})
export class ExpanableContentComponent implements OnInit {

  @Input() readonly title: string
  @Input() readonly fruit: Fruit
  @Output() private toggleContent = new EventEmitter<string>()
  toggle: boolean = false

  constructor() { }

  ngOnInit() { }

  toggleCard() {
    !this.toggle ? this.toggleContent.emit('1') : this.toggleContent.emit('-1')
    this.toggle = !this.toggle
  }
}
