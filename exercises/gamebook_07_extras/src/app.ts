import { Component, Inject } from '@angular/core';

import { Adventure, Option, GameState } from './interfaces'
import { StateHandler } from './statehandler';

import { AdventureToken } from './tokens'

@Component({
  selector: 'app',
  template: `
    <div [class.dead]="gameOver">
      <nameform
        [currentName]="gameState.name"
        (newName)="newName($event)"
      ></nameform>
      <hr>
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
  constructor(public stateHandler: StateHandler, @Inject(AdventureToken) public adventure: Adventure){
    stateHandler.listen(state => this.gameState = state);
    this.restart();
  }
  get scene() {
    return this.adventure.scenes[this.gameState.atScene];
  }
  executeOption(opt:Option){
    this.stateHandler.update({...this.gameState, atScene: opt.to});
  }
  restart(){
    this.stateHandler.update({...this.adventure.startState});
  }
  get gameOver():boolean {
    return !this.scene.opts.length;
  }
  newName(name:string){
    this.stateHandler.update({...this.gameState, name: name});
  }
}
