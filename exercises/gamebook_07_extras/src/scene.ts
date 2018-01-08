import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Scene, Option } from './interfaces'

@Component({
  selector: 'scene',
  template: `
    <h4>{{currentScene.title}}</h4>
    <img src="{{currentScene.imgUrl}}">
    <p>{{currentScene.desc | plrname}}</p>
    <ul>
      <li (click)="selectOption(o)" *ngFor="let o of currentScene.opts">{{o.text}}</li>
      <li (click)="selectReset()" *ngIf="gameOver">Restart</li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}'
  ]
})
export class SceneComponent {
  @Input() currentScene: Scene
  @Output() selectedOption = new EventEmitter<Option>()
  @Output() selectedReset = new EventEmitter<void>()
  selectOption(opt:Option){
    this.selectedOption.emit(opt)
  }
  selectReset(){
    this.selectedReset.emit();
  }
  get gameOver():boolean {
    return !this.currentScene.opts.length;
  }
}
