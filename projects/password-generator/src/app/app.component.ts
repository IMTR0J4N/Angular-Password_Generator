import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <h1>Générez un mot de passe fort !</h1>
    <div class="grid">
      <div>
        <h2>Votre futur mot de passe :</h2>
        <article>{{ message }}</article>
      </div>
      <div>
        <label for="length">Longueur du mot de passe : {{ length }}</label>
        <input
          type="range"
          min="10"
          max="50"
          name="length"
          id="length"
          [value]="20"
          (input)="onChangeLength($event)"
        />
        <label
          ><input
            role="switch"
            type="checkbox"
            name="uppercase"
            id="uppercase"
            (change)="OnChangeSettings($event)"
          />Contiendra des majuscucles</label
        >

        <label
          ><input
            role="switch"
            type="checkbox"
            name="numbers"
            id="numbers"
            (change)="OnChangeSettings($event)"
          />Contiendra des nombres</label
        >

        <label
          ><input
            role="switch"
            type="checkbox"
            name="symbols"
            id="symbols"
            [checked]="false"
            (change)="OnChangeSettings($event)"
          />Contiendra des caractères spéciaux</label
        >
        <hr />
        <button (click)="OnClickGenerate()">Générer</button>
        <button>Copier le mot de passse</button>
        <p>Le mot de passe à été généré</p>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class AppComponent {
  message = 'Cliquez sur le bouton pour "Générer"';
  length = 20;
  uppercase = false;
  numbers = false;
  symbols = false;

  OnClickGenerate() {
    this.message = 'Un mot de passe super fort!!!';
  }
  onChangeLength(event: Event) {
    const el = event.target as HTMLInputElement;
    this.length = +el.value;
  }
  OnChangeSettings(event: Event) {
    const el = event.target as HTMLInputElement;
    if (
      el.name !== 'uppercase' &&
      el.name !== 'numbers' &&
      el.name !== 'symbols'
    ) {
      return;
    }
    this[el.name] = el.checked;
  }
}
