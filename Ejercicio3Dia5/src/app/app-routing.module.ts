import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruitslist',
    pathMatch: 'full'
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./pages/sanbox/sanbox.module').then( m => m.SanboxPageModule)
  },
  {
    path: 'fruitslist',
    loadChildren: () => import('./pages/fruitslist/fruitslist.module').then( m => m.FruitslistPageModule)
  },
  {
    path: 'fruit/:id',
    loadChildren: () => import('./pages/fruit/fruit.module').then( m => m.FruitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
