import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nameform',
  template: `
    <form (ngSubmit)="onSubmit(f.value.playerName)" #f="ngForm" novalidate>
      <input
        name="playerName"
        required
        pattern="[A-Za-z]{3,8}"
        ngModel
        placeholder="Enter your name"
      >
      <input type="submit" [disabled]="!f.form.valid" value="Submit">
      Playing as: {{currentName}}
    </form>
  `,
  styles: ["input.ng-invalid {background-color: red;}"]
})
export class NameForm {
  @Input() currentName: string
  @Output() newName = new EventEmitter<string>()
  onSubmit(plrname: string){
    this.newName.emit(plrname);
  }
}
