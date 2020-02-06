import { Component } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

declare const require: any
const db = require('src/app/mocks/db.json')

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fruits : Fruit[] = [ ...db.fruits ];
  recoverDisabled: boolean = true
  toggleComponent: boolean = false;

  constructor() {  }

  fullName(fruit: Fruit) {
    return `${fruit.name} - ${fruit.description}`
  }

  deleteFruit(id: string) {
    this.fruits.splice(+id, 1)
    this.recoverDisabled = false
  }

  recoverFruits() {
    this.fruits = [ ...db.fruits ]
    this.recoverDisabled = true
  }

  toggleComponentF() {
    this.toggleComponent = !this.toggleComponent
  }

  deleteFruitEvent(num: number) {
    console.log(num)
  }
}
