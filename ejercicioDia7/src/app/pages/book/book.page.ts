import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IonButton, IonFabButton, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  @ViewChild(IonButton, { static: true }) submitBtn: IonButton
  @ViewChild(IonFabButton, { static: true }) deleteBtn: IonFabButton
  state: string = 'loading'
  bookId: number
  book: Book
  bookForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      language: ['', Validators.required],
      edition: ['', Validators.required],
      publisher: ['', Validators.required]
    })

    if (this.route.snapshot.paramMap.get('id')) {
      this.state = 'loading'
      this.bookId = +this.route.snapshot.paramMap.get('id')
      
      this.bookService.getBookFromServiceById(this.bookId).subscribe(book => {
        this.state = 'loaded'
        this.book = book
        this.bookForm.patchValue(this.book)
      },
        (err: HttpErrorResponse) => {
          console.log(err)
          this.state = 'error'
        }
      ),
      () => {
        this.state = 'loaded'
      }
    } else {
      this.state = 'loaded'
    }

  }

  submitBookForm(): void {
    if (this.bookForm.valid) {
      this.submitBtn.disabled = true
      if (this.deleteBtn) {
        this.deleteBtn.disabled = true
      }

      this.bookService.updateBook(this.bookForm.value, this.bookId).subscribe(res => {
        console.log(res)
      },
        async (err: HttpErrorResponse) => {
          console.log(err)
          this.submitBtn.disabled = false
          if (this.deleteBtn) {
            this.deleteBtn.disabled = false
          }

          const toast = await this.toast.create({
            header: 'Error',
            message: 'Error al actualizar un libro',
            position: 'bottom',
            duration: 2000
          });

          toast.present()
        },
        async () => {
          this.submitBtn.disabled = false
          let toast
          if (this.deleteBtn) {
            this.deleteBtn.disabled = false
          }

          if (this.book) {
            toast = await this.toast.create({
              header: 'Operacion realizada',
              message: 'Se ha editado el libro con exito',
              position: 'bottom',
              duration: 2000
            });
          } else {
            toast = await this.toast.create({
              header: 'Operacion realizada',
              message: 'Libro creado con exito',
              position: 'bottom',
              duration: 2000
            });
          }

          toast.present()
        }
      )
    }
  }

  async askDeleteBook() {
    const alert = await this.alertController.create({
      header: 'Confirmar para eliminar libro',
      message: '¿Estas seguro de que deseas eliminar este libro?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteBook()
          }
        }
      ]
    });

    await alert.present();
  }

  deleteBook() {
    this.bookService.removeBook(this.bookId).subscribe(() => {

    },
      async (err: HttpErrorResponse) => {
        console.log(err)

        const toast = await this.toast.create({
          header: 'Error',
          message: 'Error al eliminar el libro',
          position: 'bottom',
          duration: 2000
        });

        toast.present()
      },
      async () => {
        const toast = await this.toast.create({
          header: 'Operacion realizada',
          message: 'Se ha eliminado el libro con exito',
          position: 'bottom',
          duration: 2000
        });

        toast.present()

        this.router.navigateByUrl('/books')
      }
    )
  }

  loadAgain(): void {
    this.state = 'loading'
    this.bookService.getBookFromServiceById(this.bookId).subscribe(book => {
      this.book = book
    },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.state = 'error'
      }
    ),
    () => {
      this.state = 'loaded'
    }
  }
}
