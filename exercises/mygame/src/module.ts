// the usual barebones bootstrapping, nothing added or changed

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, SceneComponent } from './app';
import { StateHandler } from './stateHandler';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, SceneComponent ],
    bootstrap: [ AppComponent ],
    providers: [ StateHandler ]
})
export class AppModule {}
