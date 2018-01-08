import {Component} from '@angular/core';

import Focus from './focus.ts'

@Component({
    selector: 'app',
    template: `
      Look, this will be autofocused: <input focus>
    `
})
export class AppComponent {}
