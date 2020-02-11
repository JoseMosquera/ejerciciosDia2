import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get(`${environment.apiUrl}/users/1`) as Observable<User>
  }

  updateUser(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/`, user) as Observable<any>
  }
}
