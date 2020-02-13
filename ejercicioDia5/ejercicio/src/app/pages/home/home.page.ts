import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { takeUntil } from "rxjs/operators"; // Usar comillas simples

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  myForm: FormGroup
  user: User
  state: string = 'loading'
  private unsubscribe$ = new Subject()

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      phone: ['' , Validators.required],
      email: ['', Validators.required]
    })

    this.usersService.getUser().pipe(takeUntil(this.unsubscribe$)).subscribe((user:User) => {
      this.myForm.reset(user)
    },
    (err: HttpErrorResponse) => {
      console.error(err)
      this.state = 'error'
    },
    () => {
      console.log('Complete!')
      this.state = 'loaded'
    }
    )
  }

  loadAgain() {
    this.state = 'loading'
    this.usersService.getUser().pipe(takeUntil(this.unsubscribe$)).subscribe((user:User) => {
      this.state = 'loading'
      this.myForm.reset(user)
    },
    (err: HttpErrorResponse) => {
      console.error(err)
      this.state = 'error'
    },
    () => {
      console.log('Complete!')
      this.state = 'loaded'
    }
    )
  }

  submitForm(submitButton: HTMLButtonElement) {
    if (this.myForm.valid) {
      submitButton.disabled = true
      this.usersService.updateUser(this.myForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe(async res => {
        console.log(res)
        submitButton.disabled = false
        const alert = await this.alertController.create({
          header: 'User Updated',
          message: 'The user was updated properly',
          buttons: [
            {
              text: 'OK',
              cssClass: 'primary'
            }
          ]
        });
    
        await alert.present();
      },
        err => {
          console.log(err)
          submitButton.disabled = false;
        }
      )
    }
  }

  // Falta la interfaz
  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}

// Bien pero ojo con los errores que muestra el linter. Falta coherencia en los estilos (comillas simples, punto y comas, etc)
// El alert con el mensaje de confirmación debería ser un toast
// Falta el toast cuando la petición da error
