import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app.ts';
import Highlightable from './highlighter.ts'


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Highlightable ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);