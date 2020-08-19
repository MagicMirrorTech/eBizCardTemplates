import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BcardComponent } from './bcard/bcard.component';
import { BcardContentComponent } from './bcard-content/bcard-content.component';
import { BcardHeaderComponent } from './bcard-header/bcard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BcardComponent,
    BcardContentComponent,
    BcardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
