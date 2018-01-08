import { Component } from '@angular/core';
import { myAdventure} from './data';
import { Scene } from './interfaces';

@Component({
  selector: 'app',
  template: `
    <h1>Name of game: {{gameName}}</h1>
    <h2>{{sceneTitle}}</h2>
    <img src="{{imgUrl}}"/>
    <p>
      {{sceneDesc}}
    </p>
    <ul>
      <li *ngFor="let opt of opts">{{opt}}</li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}'
  ]
})
export class AppComponent {
  gameName = myAdventure.gameName;
  currentScene:Scene = myAdventure.scenes.start;
  sceneTitle = this.currentScene.title;
  imgUrl = this.currentScene.imgUrl;
  sceneDesc = this.currentScene.desc;
  opts = this.currentScene.opts;
}
