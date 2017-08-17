import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
