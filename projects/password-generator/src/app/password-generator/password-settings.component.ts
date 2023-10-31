import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Settings } from '../types';

@Component({
  selector: 'password-settings',
  template: `
    <label for="length">Longueur du mot de passe : {{ settings.length }}</label>
    <input
      type="range"
      min="10"
      max="50"
      name="length"
      id="length"
      [(ngModel)]="settings.length"
      (input)="OnSettingsChange()"
    />
    <label
      ><input
        role="switch"
        type="checkbox"
        name="uppercase"
        id="uppercase"
        [(ngModel)]="settings.uppercase"
        (change)="OnSettingsChange()"
      />Contiendra des majuscucles</label
    >

    <label
      ><input
        role="switch"
        type="checkbox"
        name="numbers"
        id="numbers"
        [(ngModel)]="settings.numbers"
        (change)="OnSettingsChange()"
      />Contiendra des nombres</label
    >

    <label
      ><input
        role="switch"
        type="checkbox"
        name="symbols"
        id="symbols"
        [(ngModel)]="settings.symbols"
        (change)="OnSettingsChange()"
      />Contiendra des caractères spéciaux</label
    >
  `,
  styles: [],
})
export class PasswordSettingsComponent {
  @Input()
  settings = {
    length: 20,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  @Output('settings-change')
  onSettingsChangeEvent = new EventEmitter<Settings>();

  OnSettingsChange() {
    this.onSettingsChangeEvent.emit(this.settings);
  }
}
