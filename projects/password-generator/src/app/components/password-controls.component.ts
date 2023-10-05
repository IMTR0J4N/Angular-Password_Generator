import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  template: `
    <button (click)="OnClickGenerate()">Générer</button>
    <button>Copier le mot de passse</button>
  `,
  styles: [],
})
export class PasswordControlsComponent {
  @Output()
  generateEvent = new EventEmitter();

  OnClickGenerate() {
    this.generateEvent.emit();
  }
}
