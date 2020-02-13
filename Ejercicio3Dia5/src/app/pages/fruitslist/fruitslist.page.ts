import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';
import { takeUntil } from "rxjs/operators";
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.page.html',
  styleUrls: ['./fruitslist.page.scss'],
})
export class FruitslistPage implements OnInit {

  fruits: Fruit[] = []
  state: string = 'loading'
  private mySubject = new ReplaySubject(1)
  private unsubscribe$ = new Subject()

  constructor(private fruitService: FruitsService) { }

  ngOnInit() {
    // this.fruitService.getFruits().pipe(flatMap((fruits: Fruit[], i: number) => {
    //   console.log(fruits[i])
    //   return Observable
    // })).subscribe()
    this.mySubject.subscribe(value => console.log(value))
    this.fruitService.getFruits().pipe(takeUntil(this.unsubscribe$)).subscribe((fruits: Fruit[]) => {
      this.state = 'loading'
      fruits.map((fruit: Fruit) => {
        this.fruits.push({ ...fruit })
      })
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.state = 'error'
      },
        () => {
          console.log('Completed!')
          this.state = 'loaded'
        }
    )
  }

  loadAgain() {
    this.fruitService.getFruits().pipe(takeUntil(this.unsubscribe$)).subscribe((fruits: Fruit[]) => {
      this.state = 'loading'
      fruits.map((fruit: Fruit) => {
        this.fruits.push({ ...fruit })
      })
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.state = 'error'
      },
        () => {
          console.log('Completed!')
          this.state = 'loaded'
        }
    )
  }

  ngOnDestroy() {
    console.log("destroy")
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
