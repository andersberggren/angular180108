import { Injectable, Inject } from '@angular/core';
import { GameState, Adventure } from './interfaces';

import { AdventureToken } from './tokens'

const SAVEKEY = 'GAMEITEM';

@Injectable()
export class StateHandler {
  private listeners = [];
  private state: GameState;
  constructor(@Inject(AdventureToken) public adventure: Adventure){
    let saveStr = localStorage.getItem(SAVEKEY);
    this.state = saveStr ? JSON.parse(localStorage.getItem(SAVEKEY)) : adventure.startState;
  }
  listen(callback) {
    this.listeners.push(callback);
    callback(this.state);
  }
  update(state: GameState) {
    this.state = state;
    localStorage.setItem( SAVEKEY, JSON.stringify(state) );
    this.listeners.forEach( cb=> cb(state) );
  }
}
