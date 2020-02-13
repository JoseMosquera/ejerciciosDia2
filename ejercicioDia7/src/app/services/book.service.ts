import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: Book[]

  constructor(
    private http: HttpClient
  ) { }

  get books(): Book[] {
    return this._books
  }  

  set books(books: Book[]) {
    this._books = books
  }

  getBooksFromService(): Observable<Book[]> {
    return this.http.get(`${environment.apiUrl}/books`) as Observable<Book[]>
  }

  getBookFromServiceById(id: number): Observable<Book> {
    return this.http.get(`${environment.apiUrl}/books/${id}`) as Observable<Book>
  }

  updateBook(book: Book, id?: number): Observable<any> {
    if (id) {
      return this.http.put(`${environment.apiUrl}/books/${id}`, book)
    } else {
      return this.http.post(`${environment.apiUrl}/books/`, book)
    }
  }

  removeBook(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/books/${id}`)
  }
}
