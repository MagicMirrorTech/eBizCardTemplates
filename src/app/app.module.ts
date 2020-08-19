import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BcardComponent } from './bcard/bcard.component';
import { BcardContentComponent } from './bcard-content/bcard-content.component';
import { BcardHeaderComponent } from './bcard-header/bcard-header.component';
import { AppRoutingModule } from './app-routing.module';
import { TempComponent } from './temp/temp.component';

import { LisaCardComponent } from './lisa-card/lisa-card.component';
import { RyanCardComponent } from './ryan-card/ryan-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BcardComponent,
    BcardContentComponent,
    BcardHeaderComponent,
    LisaCardComponent,
    TempComponent,
    RyanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
