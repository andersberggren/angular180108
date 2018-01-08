import { Component } from '@angular/core';

import { strangeJourney } from './data'
import { Option, GameState } from './interfaces'

@Component({
  selector: 'app',
  template: `
    <div [class.dead]="gameOver">
      <h1>{{adventure.title}}</h1>
      <scene
        (selectedOption)="executeOption($event)"
        (selectedReset)="restart()"
        [currentScene]="scene"
      ></scene>
    </div>
  `,
  styles: [
    '.dead {background-color: #F2C2CA}'
  ]
})
export class AppComponent {
  adventure = strangeJourney
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
