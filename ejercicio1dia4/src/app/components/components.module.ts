import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExpanableContentComponent } from './expanable-content/expanable-content.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    ExpanableContentComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ExpanableContentComponent,
    RatingComponent
  ]
})
export class ComponentsModule { }
