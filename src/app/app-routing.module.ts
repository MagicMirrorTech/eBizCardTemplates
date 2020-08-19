import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TempComponent } from "./temp/temp.component";
import { LisaCardComponent } from "./lisa-card/lisa-card.component";
import { RyanCardComponent } from "./ryan-card/ryan-card.component";

const routes: Routes = [
  { path: '', redirectTo: 'biz', pathMatch: 'full' },
  { path: 'home', component: TempComponent },
  { path: 'biz', component: RyanCardComponent },
  { path: 'lisa', component: LisaCardComponent }
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
