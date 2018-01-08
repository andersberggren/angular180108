import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>The exciting Quest</h1>
    <h4>A dark hallway</h4>
    <img src="http://orig11.deviantart.net/8271/f/2012/114/d/9/dark_hallway_by_deathshadow3-d4xh6ba.jpg">
    <p>The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.</p>
    <ul>
      <li>Open the door</li>
      <li>Walk down the corridor</li>
      <li>Turn back</li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}'
  ]
})
export class AppComponent {}
