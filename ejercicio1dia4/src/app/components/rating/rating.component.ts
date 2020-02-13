import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() readonly likesParam: number
  @Input() readonly dislikesParam: number
  @Output() private likesSum = new EventEmitter<string>()
  @Output() private dislikesSum = new EventEmitter<string>()
  likes: number = 0;
  dislikes: number = 0;
  rating: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.likesParam || this.dislikesParam) {
      if (this.likesParam) {
        this.likes = +this.likesParam
        this.likesSum.emit(this.likesParam.toString())
      }
      if (this.dislikesParam) {
        this.dislikes = +this.dislikesParam
        this.dislikesSum.emit(this.dislikesParam.toString())
      }
      this.rating = (this.likes * 10) / (this.likes + this.dislikes)
    }
  }

  like() {
    this.likes += 1
    this.rating = (this.likes * 10) / (this.likes + this.dislikes)
    this.likesSum.emit('1')
  }

  dislike() {
    this.dislikes += 1
    this.likes == 0 ? this.rating = 0 : this.rating = (this.likes * 10) / (this.likes + this.dislikes)
    this.dislikesSum.emit('1')
  }
}
