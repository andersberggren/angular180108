import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
export class AppModule {}