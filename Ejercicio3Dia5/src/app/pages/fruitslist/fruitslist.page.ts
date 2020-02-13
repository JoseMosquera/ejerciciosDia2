import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

import { Fruit } from '../../models/fruit.model';
import { FruitsService } from '../../services/fruits.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.page.html',
  styleUrls: ['./fruitslist.page.scss'],
})
export class FruitslistPage {

  fruits: Fruit[] = []
  state: string = 'loading'
  private mySubject = new ReplaySubject(1)
  private unsubscribe$ = new Subject()

  constructor(private fruitService: FruitsService) { }

  // Ojo ngOnInit no saltará si volvemos de una pagina q esté por encima para esos casos usar los ciclos de vida de ionic
  // para actualizar siempre el listado usar ionViewWillEnter por ejemplo
  ionViewWillEnter() {
    // this.fruitService.getFruits().pipe(flatMap((fruits: Fruit[], i: number) => {
    //   console.log(fruits[i])
    //   return Observable
    // })).subscribe()
    this.mySubject.subscribe(value => console.log(value))
    this.fruitService.getFruits().pipe(takeUntil(this.unsubscribe$)).subscribe((fruits: Fruit[]) => {
      this.state = 'loading'

      // Este map devuelve un array y no se está usando. Mejor usar forEach en lugar de Map.

      // fruits.map((fruit: Fruit) => {
        
        // Con push no coseguiremos refrescar los datos dado que la referencia del array this.fruits no cambia y angular
        // no es capaz de detectar cuando un objeto cambia por dentro. Tendríamos que crear un nuevo array modificado para ver
        // los cambios

        //this.fruits.push({ ...fruit });
      //});

      // Una posible solución para que aparezca el array con las modificaciones
      this.fruits = fruits;
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
