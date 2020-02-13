import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-loading-feedback',
  templateUrl: './app-loading-feedback.component.html',
  styleUrls: ['./app-loading-feedback.component.scss'],
})
export class AppLoadingFeedbackComponent implements OnInit {

  @Input() state: string // Lo ideal sería crear un enum con los tres estados en modelos y asignarlo como tipo en lugar de string
  @Output() readonly retryEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}

  retry() {
    this.retryEvent.emit()
  }
}
