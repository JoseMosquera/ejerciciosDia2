import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {

  likes: number = 0;
  unlikes: number = 0;
  rating: number = 0;
  toggle: boolean = false

  constructor() { }

  ngOnInit() {}

  like() {
    this.likes += 1
    this.rating = (this.likes * 10) / (this.likes + this.unlikes)
  }

  unlike() {
    this.unlikes += 1
    if (this.likes == 0) {
      this.rating = 0
    } else {
      this.rating = (this.likes * 10) / (this.likes + this.unlikes)
    }
  }

  toggleCard() {
    this.toggle = !this.toggle
  }
}
