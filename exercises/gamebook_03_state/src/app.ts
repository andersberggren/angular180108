import { Component } from '@angular/core';

import { strangeJourney } from './data'

@Component({
  selector: 'app',
  template: `
    <h1>{{adventure.title}}</h1>
    <h4>{{scene.title}}</h4>
    <img src="{{scene.imgUrl}}">
    <p>{{scene.desc}}</p>
    <ul>
      <li *ngFor="let o of scene.opts">{{o}}</li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}'
  ]
})
export class AppComponent {
  adventure = strangeJourney;
  gameState = this.adventure.startState;
  get scene(){
    return this.adventure.scenes[this.gameState.atScene];
  }
}
