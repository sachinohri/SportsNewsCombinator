import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { newsroutingmodule } from './app.route';

import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import {NewsapiService} from './service/newsapi.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
        newsroutingmodule,
        HttpModule

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
