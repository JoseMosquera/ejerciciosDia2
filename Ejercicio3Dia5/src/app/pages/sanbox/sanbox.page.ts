import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanbox',
  templateUrl: './sanbox.page.html',
  styleUrls: ['./sanbox.page.scss'],
})
export class SanboxPage implements OnInit {

  toggle: boolean = false
  numberExpanded: number = 0
  likes: number = 0
  dislikes: number = 0

  constructor() { }

  ngOnInit() {
  }

  explanableContentChange(titleComponent: string) {
    this.numberExpanded += +titleComponent
  }

  likesSum(num: string) {
    this.likes += +num
  }

  dislikesSum(num: string) {
    this.dislikes += +num
  }
 }
