import { Component } from '@angular/core';
import { Settings } from './types';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <h1>Générez un mot de passe fort !</h1>
    <div class="grid">
      <div>
        <password-settings
          [settings]="defaultSettings"
          (settings-change)="changeSettings($event)"
        ></password-settings>
        <hr />
        <password-controls (generateEvent)="generate()"></password-controls>
      </div>
      <password-display [password]="password"></password-display>
    </div>
  </div>`,
  styles: [],
})
export class AppComponent {
  password?: String;

  settings: Settings = {
    length: 20,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  get defaultSettings() {
    return { ...this.settings };
  }

  generate() {
    this.password = 'Un mot de passe super fort!!!';
  }

  changeSettings(settings: Settings) {
    this.settings = settings;
    console.table(this.settings);
  }
}
