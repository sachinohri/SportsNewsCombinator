import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
