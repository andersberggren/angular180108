import { Component, Input, EventEmitter, Output } from '@angular/core';
import { myAdventure} from './data';
import { Scene, Option, GameState } from './interfaces';

@Component({
  selector: 'app',
  template: `
    <h1>{{adventure.gameName}}</h1>
    <scene [scene]="adventure.scenes[gameState.currentSceneId]" [gameOver]="gameState.gameOver"
        (selectedOption)="changeScene($event)" (reset)="reset()"></scene>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}'
  ]
})
export class AppComponent {
  adventure = myAdventure;
  gameState: GameState;

  constructor() {
    this.reset();
  }

  changeScene(option: Option) {
    this.gameState.currentSceneId = option.targetSceneId;
    var currentScene = this.adventure.scenes[this.gameState.currentSceneId];
    this.gameState.gameOver = currentScene.opts.length == 0;
  }

  reset() {
    this.gameState = {...this.adventure.initialGameState};
  }
}

@Component({
  selector: 'scene',
  template: `
    <h2>{{scene.title}}</h2>
    <img src="{{scene.imgUrl}}"/>
    <p>
      {{scene.desc}}
    </p>
    <ul>
      <li *ngFor="let opt of scene.opts;">
        <button (click)="selectedOption.emit(opt)">{{opt.desc}}</button>
      </li>
      <li *ngIf="gameOver">
        <button (click)="reset.emit()">Reset</button>
      </li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}'
  ]
})
export class ChildComponent {
  @Input() scene: Scene;
  @Input() gameOver: boolean;
  @Output() selectedOption = new EventEmitter<Option>();
  @Output() reset = new EventEmitter<void>();
}
