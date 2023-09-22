import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[model]',
})
export class ModelDirective {
  @Input('model')
  @HostBinding('value')
  value: String | number | undefined;

  @Output('modelChange')
  changeEvent = new EventEmitter();

  @HostListener('input', ['$event.target'])
  onInputChange(el: HTMLInputElement) {
    if (typeof el.value === 'string') {
      this.changeEvent.emit(el.value);
    } else {
      this.changeEvent.emit(el.valueAsNumber);
    }
  }
}
