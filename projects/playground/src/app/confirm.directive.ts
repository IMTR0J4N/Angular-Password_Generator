import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirmMessage')
  message = 'etes vous certain ?';

  @HostListener('click')
  onClick() {
    return window.confirm(this.message);
  }
}
