import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app.ts';
import Pagination from './pagination.ts'
import QuoteForm from './quoteform.ts'
import Quote from './quote.ts'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Pagination, Quote, QuoteForm ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);