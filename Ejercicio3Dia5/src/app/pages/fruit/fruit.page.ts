import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.page.html',
  styleUrls: ['./fruit.page.scss'],
})
export class FruitPage implements OnInit {

  myForm: FormGroup
  fruit: Fruit
  state: string = 'loading'
  id: string
  susbcription: Subscription
  private mySubject = new ReplaySubject(1)

  constructor(
    private activatedRoute: ActivatedRoute,
    private fruitService: FruitsService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.susbcription = this.fruitService.getFruit(this.id).subscribe((fruit: Fruit) => {
      this.fruit = fruit
      this.myForm.reset(fruit)
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.state = 'error'
      },
      () => {
        this.state = 'loaded'
      }
    )
    this.myForm = this.formBuilder.group({
      description: ['', Validators.required]
    })
  }

  loadAgain() {
    this.susbcription = this.fruitService.getFruit(this.id).subscribe((fruit: Fruit) => {
      this.fruit = fruit
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.state = 'error'
      },
      () => {
        this.state = 'loaded'
      }
    )
  }

  submitForm() {
    let fruit = { ...this.fruit, description: this.myForm.value.description }
    this.fruitService.updateFruit(fruit).subscribe(res => {
      this.mySubject.next(res)
    },
      err => console.error(err)
    )
  }

  ngOnDestroy() {
    this.susbcription.unsubscribe()
    this.fruitService.getFruits().subscribe()
    this.mySubject.subscribe(value => console.log(value))
  }
}
