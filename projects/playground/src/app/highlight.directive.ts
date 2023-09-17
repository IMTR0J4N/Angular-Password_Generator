import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight')
  @HostBinding('style.backgroundColor')
  color: string = 'green';

  // constructor(private el: ElementRef<HTMLElement>) {
  //   this.color = 'yellow';
  // }
  // le constructeur ne fonctioone pas sur une variable qui est bindée il faut utiliser ngOnInit

  ngOnInit() {
    this.color = 'purple';
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(p: HTMLElement) {
    // p.style.backgroundColor = this.color;
    this.color = 'red';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.color = 'yellow';
  }
}
