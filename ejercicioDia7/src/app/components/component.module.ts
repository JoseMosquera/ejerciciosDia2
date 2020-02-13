import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "./book-card/book-card.component";
import { IonicModule } from '@ionic/angular';
import { AppLoadingFeedbackComponent } from './app-loading-feedback/app-loading-feedback.component';



@NgModule({
  declarations: [
    BookCardComponent,
    AppLoadingFeedbackComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BookCardComponent,
    AppLoadingFeedbackComponent
  ]
})
export class ComponentModule { }
