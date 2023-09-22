import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[force-lower]',
})
export class ForceLowerDirective {
  @Input()
  @HostBinding('value')
  value = '';

  @HostListener('input', ['$event.target.value'])
  forceLower(value: String) {
    this.value = value.toLowerCase();
  }

  ngOnInit() {
    this.value = this.value.toLowerCase();
  }
}
