import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitPageRoutingModule } from './fruit-routing.module';

import { FruitPage } from './fruit.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    FruitPageRoutingModule
  ],
  declarations: [FruitPage]
})
export class FruitPageModule {}
