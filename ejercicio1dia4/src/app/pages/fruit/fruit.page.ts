import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.page.html',
  styleUrls: ['./fruit.page.scss'],
})
export class FruitPage implements OnInit {

  fruit: Fruit

  constructor(
    private activatedRoute: ActivatedRoute,
    private fruitService: FruitsService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.fruit = this.fruitService.getFruit(id)
  }

}
