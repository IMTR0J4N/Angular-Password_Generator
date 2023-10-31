import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-display',
  template: `<div>
    <h2>Votre futur mot de passe :</h2>
    <article>
      <span *ngIf="password">{{ password }}</span>
      <span *ngIf="!password">Cliquez sur le bouton pour "Générer"</span>
    </article>
  </div>`,
  styles: [],
})
export class PasswordDisplayComponent {
  @Input()
  password?: String;
}
