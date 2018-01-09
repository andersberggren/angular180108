import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Scene, Option, GameState } from './interfaces';
import { StateHandler } from './stateHandler';

@Component({
  selector: 'app',
  template: `
    <div [class.gameOver]="gameState.gameOver">
      <h1>{{stateHandler.gameName}}</h1>
      <scene [scene]="currentScene"
             [gameOver]="gameState.gameOver"
             (selectedOption)="changeScene($event)"
             (reset)="reset()">
      </scene>
    </div>
  `,
  styles: [
    'div {padding: 25px;}',
    'img {max-width: 250px; max-height: 200px;}',
    '.gameOver {background: #ff4040;}'
  ]
})
export class AppComponent {
  gameState: GameState;
  currentScene: Scene;

  constructor(public stateHandler: StateHandler) {
    this.stateHandler.listen((state, currentScene) =>
        {this.gameState = state; this.currentScene = currentScene});
  }

  changeScene(option: Option) {
    this.stateHandler.changeScene(option);
  }

  reset() {
    this.stateHandler.reset();
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
export class SceneComponent {
  @Input() scene: Scene;
  @Input() gameOver: boolean;
  @Output() selectedOption = new EventEmitter<Option>();
  @Output() reset = new EventEmitter<void>();
}
