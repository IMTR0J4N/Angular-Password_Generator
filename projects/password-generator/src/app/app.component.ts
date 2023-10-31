import { Component } from '@angular/core';
import { Settings } from './types';
import { PasswordGeneratorService } from './password-generator/password-generator.service';

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
        <password-controls
          [password]="password"
          (generateEvent)="generate()"
        ></password-controls>
      </div>
      <password-display [password]="password"></password-display>
    </div>
  </div>`,
  styles: [],
})
export class AppComponent {
  password?: string;

  settings: Settings = {
    length: 20,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  constructor(private PasswordGeneratorService: PasswordGeneratorService) {}

  get defaultSettings() {
    return { ...this.settings };
  }

  generate() {
    this.password = this.PasswordGeneratorService.generate(this.settings);
  }

  changeSettings(settings: Settings) {
    this.settings = settings;
    console.table(this.settings);
  }
}
