import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule) },
  { path: 'book/:id', loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule) },
  { path: 'book', loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
