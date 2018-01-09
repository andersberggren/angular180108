// the usual barebones bootstrapping, nothing added or changed

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildComponent } from './app';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, ChildComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
