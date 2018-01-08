import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent  } from './app.ts';
import { Focus } from './focus.ts'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Focus ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
