import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BCardsRoutingModule } from './b-cards-routing.module';
import { BCardsComponent } from './b-cards.component';


@NgModule({
  declarations: [BCardsComponent],
  imports: [
    CommonModule,
    BCardsRoutingModule
  ]
})
export class BCardsModule { }
