import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.page.html',
  styleUrls: ['./fruitslist.page.scss'],
})
export class FruitslistPage implements OnInit {

  fruits: Fruit[] = []

  constructor(private fruitService: FruitsService) { }

  ngOnInit() {
    this.fruits = this.fruitService.getFruits()
  }

}
