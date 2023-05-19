import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lgmBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#ffffff';
  private defaultColor: string = '#009688';
/*   private defaultHeight: number = 400;
 */



  constructor(private el: ElementRef) {
    this.setBorder('#ffffff');
/*     this.setHeight(400);
 */  }

  
 @Input('lgmBorderCard') borderColor: string;
 
 @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }


/*   private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  } */


}
