import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanboxPageRoutingModule } from './sanbox-routing.module';

import { SanboxPage } from './sanbox.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanboxPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SanboxPage]
})
export class SanboxPageModule {}
