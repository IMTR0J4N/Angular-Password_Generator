import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[no-open]',
})
export class NoopenDirective {
  // @HostListener('click', ['$event'])
  // onClick(e: Event) {
  //   e.preventDefault();
  // }

  @HostListener('click')
  onClick() {
    return false;
  }
}
