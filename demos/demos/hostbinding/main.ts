import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app.ts';
import Togglable from './togglable.ts'
import Togglable2 from './togglable2.ts'


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Togglable, Togglable2 ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);