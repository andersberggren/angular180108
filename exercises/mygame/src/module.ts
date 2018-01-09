// the usual barebones bootstrapping, nothing added or changed

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, SceneComponent } from './app';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, SceneComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
