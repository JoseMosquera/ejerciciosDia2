import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanboxPage } from './sanbox.page';

const routes: Routes = [
  {
    path: '',
    component: SanboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanboxPageRoutingModule {}
