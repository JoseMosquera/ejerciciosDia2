import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage {

  state: string = 'loading'
  books: Book[] = []

  constructor(
    private bookService: BookService
  ) { }

  ionViewWillEnter() {
    this.bookService.getBooksFromService().subscribe(books => {
      this.books = books
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

  loadAgain() {
    this.bookService.getBooksFromService().subscribe(books => {
      this.books = books
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
}
