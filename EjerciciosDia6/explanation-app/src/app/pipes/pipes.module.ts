import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { CensurePipe } from './censure.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    CensurePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncatePipe,
    CensurePipe
  ]
})
export class PipesModule { }
