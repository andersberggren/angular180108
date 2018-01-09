import { Component } from '@angular/core';
import { myAdventure} from './data';
import { Scene } from './interfaces';
import { Option } from './interfaces';

@Component({
  selector: 'app',
  template: `
    <h1>{{adventure.gameName}}</h1>
    <h2>{{currentScene.title}}</h2>
    <img src="{{currentScene.imgUrl}}"/>
    <p>
      {{currentScene.desc}}
    </p>
    <ul>
      <li *ngFor="let opt of currentScene.opts;">
        <button (click)="changeScene(opt)">{{opt.desc}}</button>
      </li>
      <li *ngIf="isGameOver">
        <button (click)="reset()">Reset</button>
      </li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}'
  ]
})
export class AppComponent {
  adventure = myAdventure;
  gameState = undefined;

  get currentScene(): Scene {
    return myAdventure.scenes[this.gameState.currentSceneId];
  }

  changeScene(option: Option) {
    this.gameState.currentSceneId = option.targetSceneId;
  }

  isGameOver() {
    return this.currentScene.opts.length == 0;
  }

  reset() {
    this.gameState = {...this.adventure.initialGameState};
  }
}
