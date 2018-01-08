import { Component } from '@angular/core';
import { myAdventure} from './data';
import { Scene } from './interfaces';

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
      <li *ngFor="let opt of currentScene.opts">{{opt}}</li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}'
  ]
})
export class AppComponent {
  adventure = myAdventure;
  gameState = this.adventure.initialGameState;
  get currentScene(): Scene {
    return myAdventure.scenes[this.gameState.currentSceneId];
  }
}
