import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

const Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  { path: '', 
    component: MenuComponent,
    children: [
      { path: 'fruits', loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)},
      { path: 'sandbox', loadChildren: () => import('../sandbox/sandbox.component').then( m => m.SandboxComponent)}
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MenuComponent]
})
export class MenuComponentModule {}