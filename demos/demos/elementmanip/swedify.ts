import {Directive,ElementRef} from '@angular/core';

/*
Insanely complex (...) jQuery plugin that we can't be
bothered to convert to Angular2
*/
$.fn.swedify = function(){
  this.css({
    backgroundColor: 'yellow',
    border: '5px solid blue'
  })
  return this
}


@Directive({
  selector: '[swedify]'
})
export class SwedifyDirective {
  constructor(private el:ElementRef){
    $(el.nativeElement).swedify()
  }
}
