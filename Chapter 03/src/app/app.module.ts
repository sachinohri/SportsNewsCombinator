import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';

import { routing } from './app.route';

import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';
import { HeaderComponent } from './Core/header/header.component';
import { PublishedComponent } from './dashboard/published/published.component';
import {NewsapiService} from './service/newsapi.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,TimeAgoPipe, PublishedComponent
  ],
  imports: [
    BrowserModule,
        routing,

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
