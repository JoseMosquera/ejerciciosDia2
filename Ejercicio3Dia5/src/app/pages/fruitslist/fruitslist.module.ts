import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitslistPageRoutingModule } from './fruitslist-routing.module';

import { FruitslistPage } from './fruitslist.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitslistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FruitslistPage]
})
export class FruitslistPageModule {}
