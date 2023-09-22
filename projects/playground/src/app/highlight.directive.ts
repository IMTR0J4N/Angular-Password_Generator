import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  @Input('appHighlight')
  @HostBinding('style.backgroundColor')
  color: string = 'green';

  // constructor(private el: ElementRef<HTMLElement>) {
  //   this.color = 'yellow';
  // }
  // le constructeur ne fonctionne pas sur une variable qui est bindée il faut utiliser ngOnInit

  @Output('color-change')
  colorChangeEvent = new EventEmitter<string>();

  ngOnInit() {
    this.color = 'purple';
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(/*p: HTMLElement*/) {
    // p.style.backgroundColor = this.color;
    this.color = 'red';
    this.colorChangeEvent.emit(this.color);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.color = 'yellow';
    this.colorChangeEvent.emit(this.color);
  }
}
