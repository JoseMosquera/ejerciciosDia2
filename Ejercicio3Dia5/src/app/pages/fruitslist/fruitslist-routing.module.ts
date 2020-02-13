import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitslistPage } from './fruitslist.page';

const routes: Routes = [
  {
    path: '',
    component: FruitslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitslistPageRoutingModule {}
