import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { SceneComponent } from './scene';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SceneComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
