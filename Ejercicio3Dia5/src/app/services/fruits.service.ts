import { Injectable } from '@angular/core';
import { Fruit } from '../models/fruit.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  fruits: Fruit[] = []
  fruit: Fruit
  fruits$ = new BehaviorSubject([])

  constructor(
    private http: HttpClient
  ) { }

  getFruits(): Observable<Fruit[]> {
    return this.http.get(`${environment.apiUrl}/fruits`) as Observable<Fruit[]>
  }

  getFruit(id: string): Observable<Fruit> {
    return this.http.get(`${environment.apiUrl}/fruits/${id}`) as Observable<Fruit>
  }

  updateFruit(fruit: Fruit): Observable<any> {
    return this.http.put(`${environment.apiUrl}/fruits/${fruit.id}`, fruit) as Observable<any>
  }
}
