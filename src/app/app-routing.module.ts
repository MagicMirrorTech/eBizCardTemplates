import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BcardComponent } from "./bcard/bcard.component";

import { DataLoaderService } from "./data-loader.service";

const routes: Routes = [
  {
    path: '**',
    component: BcardComponent
  },
  {
    path: 'hold',
    component: BcardComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
