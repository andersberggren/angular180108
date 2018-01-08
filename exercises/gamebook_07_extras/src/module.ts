import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app';
import { SceneComponent } from './scene';
import { NameForm } from './nameform';
import { StateHandler } from './statehandler';
import { strangeJourney } from './data';
import { AdventureToken } from './tokens';
import { PlrNamePipe } from './plrnamepipe';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SceneComponent, NameForm, PlrNamePipe ],
    bootstrap: [ AppComponent ],
    providers: [ StateHandler, {provide: AdventureToken, useValue: strangeJourney} ]
})
export class AppModule {}