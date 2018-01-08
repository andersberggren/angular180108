import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app';
import { SceneComponent } from './scene';
import { StateHandler } from './statehandler';
import { strangeJourney } from './data';
import { AdventureToken } from './tokens';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, SceneComponent ],
    bootstrap: [ AppComponent ],
    providers: [ StateHandler, {provide: AdventureToken, useValue: strangeJourney} ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
