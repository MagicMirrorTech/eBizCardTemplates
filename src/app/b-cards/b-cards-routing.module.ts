import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BCardsComponent } from './b-cards.component';
import { RyanCardComponent } from '../ryan-card/ryan-card.component';


const routes: Routes = [
    {
      path: 'ryan',
      component: RyanCardComponent
    },
    {
      path: 'lisa',
      component: RyanCardComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BCardsRoutingModule { }
