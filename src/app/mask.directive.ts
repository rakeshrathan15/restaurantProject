import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

    @Input()
    appMask:string='';

    maskData:string='**********';

    originalData: string ='';


  constructor(private eleRef: ElementRef) {
    console.log('From MaskDirective  ');
   }

   @HostListener("mouseenter")
   mouseEnter(){
    console.log(" Enter into the mouse enter method ");
    this.appMask=this.originalData;
    this.eleRef.nativeElement.value=this.appMask;


  }

  @HostListener("mouseleave")
  mouseOut(){
     this.originalData=this.appMask;
     this.appMask=this.maskData;
    console.log(" enter into the mouseLeave method original method "+this.originalData);
    console.log(" enter into the mouseLeave method  app mask"+this.appMask);
    this.eleRef.nativeElement.value=this.appMask;
  }

  @HostListener("mouseover")
  mouseover(){
    console.log(" Enter into the mouseover method"+this.appMask);
  }

  
}
