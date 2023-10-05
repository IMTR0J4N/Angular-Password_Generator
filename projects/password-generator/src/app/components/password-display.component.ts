import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-display',
  template: `<div>
    <h2>Votre futur mot de passe :</h2>
    <article>{{ message }}</article>
  </div>`,
  styles: [],
})
export class PasswordDisplayComponent {
  @Input()
  message = '';
}
