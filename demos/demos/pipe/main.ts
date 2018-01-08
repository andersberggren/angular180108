import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.ts';
import { McFaceIt } from './mcfaceit.ts'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, McFaceIt ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
