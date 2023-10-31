import { Component } from '@angular/core';
import { Settings } from '../types';
import { TestBed } from '@angular/core/testing';
import { PasswordSettingsComponent } from './password-settings.component';
import { FormsModule } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

@Component({
  selector: 'test',
  template: `<password-settings
    (settings-change)="changeSettings($event)"
  ></password-settings>`,
})
class TestDefaultComponent {
  changeSettings(settings: Settings) {}
}

@Component({
  selector: 'test',
  template: `<password-settings
    [settings]="{
    length: 35,
    uppercase: true,
    numbers: true,
    symbols: true,
  }"
  ></password-settings>`,
})
class TestInputComponent {}

describe('PasswordSettingComponent avec testBed', () => {
  it('should represents settings in the HTML tags', async () => {
    TestBed.configureTestingModule({
      declarations: [TestDefaultComponent, PasswordSettingsComponent],
      imports: [FormsModule],
    });
    const fixture = TestBed.createComponent(TestDefaultComponent);

    fixture.detectChanges();
    await fixture.whenStable();

    const lengthInput = fixture.nativeElement.querySelector('#length');
    const uppercaseInput = fixture.nativeElement.querySelector('#uppercase');
    const numbersInput = fixture.nativeElement.querySelector('#numbers');
    const symbolsInput = fixture.nativeElement.querySelector('#symbols');

    expect(lengthInput.value).toBe('20');
    expect(uppercaseInput.checked).toBeFalse();
    expect(numbersInput.checked).toBeFalse();
    expect(symbolsInput.checked).toBeFalse();
  });
  it('should accept initial settings from the outside', async () => {
    TestBed.configureTestingModule({
      declarations: [TestInputComponent, PasswordSettingsComponent],
      imports: [FormsModule],
    });
    const fixture = TestBed.createComponent(TestInputComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const lengthInput = fixture.nativeElement.querySelector('#length');
    const uppercaseInput = fixture.nativeElement.querySelector('#uppercase');
    const numbersInput = fixture.nativeElement.querySelector('#numbers');
    const symbolsInput = fixture.nativeElement.querySelector('#symbols');

    expect(lengthInput.value).toBe('35');
    expect(uppercaseInput.checked).toBeTrue();
    expect(numbersInput.checked).toBeTrue();
    expect(symbolsInput.checked).toBeTrue();
  });
  it('should emmit an event with settings each time user changes HTML inputs', async () => {
    TestBed.configureTestingModule({
      declarations: [TestDefaultComponent, PasswordSettingsComponent],
      imports: [FormsModule],
    });
    const fixture = TestBed.createComponent(TestDefaultComponent);
    fixture.autoDetectChanges(true);
    const component = fixture.componentInstance;
    // await fixture.whenStable();
    const spy = spyOn(component, 'changeSettings');
    fixture.nativeElement.querySelector('#numbers').click();
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      symbols: false,
      uppercase: false,
      numbers: true,
    });
    const lengthInput = fixture.nativeElement.querySelector('#length');
    lengthInput.value = 40;
    lengthInput.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith({
      length: 40,
      symbols: false,
      uppercase: false,
      numbers: true,
    });
  });
});

describe('PasswordSettingComponent avec spectator', () => {
  let defaultSpectator: Spectator<TestDefaultComponent>;
  let inputSpectator: Spectator<TestInputComponent>;
  const createDefaultSpectator = createComponentFactory({
    imports: [FormsModule],
    declarations: [PasswordSettingsComponent],
    component: TestDefaultComponent,
  });
  const createInputSpectator = createComponentFactory({
    imports: [FormsModule],
    declarations: [PasswordSettingsComponent],
    component: TestInputComponent,
  });
  it('should represents settings in the HTML tags', async () => {
    defaultSpectator = createDefaultSpectator();
    await defaultSpectator.fixture.whenStable();
    expect(defaultSpectator.query('#length')).toHaveValue('20');
    expect(defaultSpectator.query('#numbers')).not.toBeChecked();
    expect(defaultSpectator.query('#symbols')).not.toBeChecked();
    expect(defaultSpectator.query('#uppercase')).not.toBeChecked();
  });
  it('should accept initial settings from the outside', async () => {
    inputSpectator = createInputSpectator();
    await inputSpectator.fixture.whenStable();
    expect(inputSpectator.query('#length')).toHaveValue('35');
    expect(inputSpectator.query('#numbers')).toBeChecked();
    expect(inputSpectator.query('#symbols')).toBeChecked();
    expect(inputSpectator.query('#uppercase')).toBeChecked();
  });
  it('should emmit an event with settings each time user changes HTML inputs', async () => {
    defaultSpectator = createDefaultSpectator();
    // await defaultSpectator.fixture.whenStable();
    const spy = spyOn(defaultSpectator.component, 'changeSettings');
    defaultSpectator.typeInElement('33', '#length');
    expect(spy).toHaveBeenCalledWith({
      length: 33,
      symbols: false,
      uppercase: false,
      numbers: false,
    });
    defaultSpectator.click('#symbols');
    expect(spy).toHaveBeenCalledWith({
      length: 33,
      symbols: true,
      uppercase: false,
      numbers: false,
    });
  });
});
