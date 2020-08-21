import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TempComponent } from "./temp/temp.component";
import { LisaCardComponent } from "./lisa-card/lisa-card.component";
import { RyanCardComponent } from "./ryan-card/ryan-card.component";
import { CarlaCardComponent } from "./carla-card/carla-card.component";

import { DataLoaderService } from "./data-loader.service";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'biz',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'temp',
  //   component: TempComponent
  // },
  // {
  //   path: 'home',
  //   component: TempComponent
  // },
  // {
  //   path: 'biz',
  //   loadChildren: () => import('./b-cards/b-cards.module').then(m => m.BCardsModule)
  // },
  // {
  //   path: 'lisa',
  //   component: LisaCardComponent
  // },
  // {
  //   path: 'carla',
  //   component: CarlaCardComponent
  // },
  {
    path: '**',
    component: CarlaCardComponent
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
