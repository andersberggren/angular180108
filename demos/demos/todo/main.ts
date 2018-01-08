import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.ts';
import { TodoList } from './todo_list.ts';
import { TodoForm } from './todo_form.ts';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, TodoList, TodoForm ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
