import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  // { path: 'sandbox', loadChildren: () => import('./components/sandbox/sandbox.component').then( m => m.SandboxComponent)}
  // { path: '', redirectTo: 'menu', pathMatch: 'full' },
  // { path: 'menu', loadChildren: () => import('./components/menu/menu.component').then( m => m.MenuComponent)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
