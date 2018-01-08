import { Component } from '@angular/core';

import { strangeJourney } from './data'
import { Option, GameState } from './interfaces'

@Component({
  selector: 'app',
  template: `
    <div [class.dead]="gameOver">
      <h1>{{adventure.title}}</h1>
      <h4>{{scene.title}}</h4>
      <img src="{{scene.imgUrl}}">
      <p>{{scene.desc}}</p>
      <ul>
        <li (click)="executeOption(o)" *ngFor="let o of scene.opts">{{o.text}}</li>
        <li (click)="restart()" *ngIf="gameOver">Restart</li>
      </ul>
    </div>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}',
    '.dead {background-color: #F2C2CA}'
  ]
})
export class AppComponent {
  adventure = strangeJourney;
  gameState: GameState;
  constructor(){
    this.restart();
  }
  get scene() {
    return this.adventure.scenes[this.gameState.atScene];
  }
  executeOption(opt: Option){
    this.gameState.atScene = opt.to;
  }
  restart(){
    this.gameState = {...this.adventure.startState}; // copy to prevent mutation
  }
  get gameOver():boolean {
    return !this.scene.opts.length;
  }
}
