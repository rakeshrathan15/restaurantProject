import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

    @Input()
    appMask:string='';

    maskData:string='**********';

  constructor() {
    console.log('From MaskDirective  ');
   }

   @HostListener("mouseenter")
   mouseEnter(){
    console.log(" Enter into the mouse enter method "+this.appMask);

  }

  @HostListener("mouseleave")
  mouseOut(){
    console.log(" enter into the mouseLeave method "+this.appMask);
  }

  @HostListener("mouseover")
  mouseover(){
    console.log(" Enter into the mouseover method"+this.appMask);
  }

  
}
