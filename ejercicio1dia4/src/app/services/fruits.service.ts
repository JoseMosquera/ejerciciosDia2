import { Injectable } from '@angular/core';
import { Fruit } from '../models/fruit.model';

declare const require
const db = require('src/app/mocks/db.json')

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  fruits: Fruit[] = []
  fruit: Fruit

  constructor() {
    this.fruits = db
  }

  getFruits(): Fruit[] {
    return this.fruits
  }

  getFruit(id: string): Fruit {
    return this.fruits.find(fruit => fruit.id == id)
  }
}
