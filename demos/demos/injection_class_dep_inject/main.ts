import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Dependency from './dependency.ts'
import Dependency2 from './dependency2.ts'

import { AppComponent } from './app.ts';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ Dependency, Dependency2 ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
