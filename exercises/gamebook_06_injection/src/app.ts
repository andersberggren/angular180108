import { Component, Inject } from '@angular/core';

import { Adventure, Option, GameState } from './interfaces'
import { StateHandler } from './statehandler';

import { AdventureToken } from './tokens'

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
  gameState: GameState
  // putting "public" before a parameter automatically stores it on `this`
  constructor(public stateHandler: StateHandler, @Inject(AdventureToken) public adventure: Adventure){
    stateHandler.listen(state => this.gameState = state);
  }
  get scene() {
    return this.adventure.scenes[this.gameState.atScene];
  }
  executeOption(opt:Option){
    this.stateHandler.update({...this.gameState, atScene: opt.to});
  }
  restart(){
    this.gameState = {...this.adventure.startState}; // copy to prevent mutation
  }
  get gameOver():boolean {
    return !this.scene.opts.length;
  }
}
