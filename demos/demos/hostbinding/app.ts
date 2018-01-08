import { Component, HostListener } from '@angular/core';

import Togglable from './togglable.ts'
import Togglable2 from './togglable2.ts'

@Component({
  selector: 'app',
  template: `
    <p togglable>Click to make me highlighted!</p>
    <p togglable2="pretty">Click to make me pretty!</p>
  `,
  directives: [Togglable,Togglable2],
  styles: ['.pretty { border: 3px solid red; }','.highlighted { border: 3px solid yellow; }']
})
export class AppComponent {}
