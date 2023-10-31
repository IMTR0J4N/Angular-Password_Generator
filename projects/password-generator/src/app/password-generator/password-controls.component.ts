import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  template: `
    <button id="generate" (click)="OnClickGenerate()">Générer</button>
    <button id="copy" *ngIf="password" (click)="onClickCopy()">
      Copier le mot de passse
    </button>
    <p id="message" *ngIf="hasBeenCopied">Mot de passe copié</p>
  `,
  styles: [],
})
export class PasswordControlsComponent {
  @Input()
  password?: string;
  @Output()
  generateEvent = new EventEmitter();

  hasBeenCopied = false;

  OnClickGenerate() {
    this.generateEvent.emit();
    this.hasBeenCopied = false;
  }
  onClickCopy() {
    if (this.password) {
      navigator.clipboard.writeText(this.password);
      this.hasBeenCopied = true;
    }
  }
}
