import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-loading-feedback',
  templateUrl: './app-loading-feedback.component.html',
  styleUrls: ['./app-loading-feedback.component.scss'],
})
export class AppLoadingFeedbackComponent implements OnInit {

  @Input() state: string
  @Output() readonly retryEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}

  retry() {
    this.retryEvent.emit()
  }
}
