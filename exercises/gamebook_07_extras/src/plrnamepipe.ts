import {Pipe, PipeTransform} from '@angular/core'

import { GameState } from './interfaces';

import { StateHandler } from './statehandler';

@Pipe({
  name: "plrname",
  pure: false
})
export class PlrNamePipe implements PipeTransform {
  constructor(stateHandler: StateHandler){
    stateHandler.listen(s => this.gameState = s);
  }
  gameState: GameState
  transform(value){
    return value.replace(
      'PLAYERNAME',
      this.gameState.name || "Player"
    );
  }
}
