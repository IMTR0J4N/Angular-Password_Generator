import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FormsModule } from '@angular/forms';
import { PasswordDisplayComponent } from './components/password-display.component';
import { PasswordControlsComponent } from './components/password-controls.component';
import { PasswordSettingsComponent } from './components/password-settings.component';

describe('AppComponent avec TestBed', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PasswordDisplayComponent,
        PasswordControlsComponent,
        PasswordSettingsComponent,
      ],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  it('should work', () => {
    const h1 = fixture.nativeElement.querySelector('h1') as HTMLElement;
    expect(h1.textContent).toBe('Générez un mot de passe fort !');
    const password = fixture.nativeElement.querySelector(
      'article'
    ) as HTMLElement;
    expect(password.textContent).toBe('Cliquez sur le bouton pour "Générer"');
  });
  it('should change message', () => {
    fixture.nativeElement.querySelector('button').click();

    fixture.detectChanges();
    const password = fixture.nativeElement.querySelector(
      'article'
    ) as HTMLElement;
    expect(password.textContent).toBe('Un mot de passe super fort!!!');
  });
  it('should change props', () => {
    fixture.nativeElement.querySelector('#uppercase').click();
    expect(component.settings.uppercase).toBeTrue();
    fixture.nativeElement.querySelector('#numbers').click();
    expect(component.settings.numbers).toBeTrue();
    fixture.nativeElement.querySelector('#symbols').click();
    expect(component.settings.symbols).toBeTrue();
    const lengthInput = fixture.nativeElement.querySelector(
      '#length'
    ) as HTMLInputElement;
    lengthInput.value = '33';
    lengthInput.dispatchEvent(new Event('input'));
    expect(component.settings.length).toBe(33);
  });
});

describe('AppComponent avec Spectator', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      AppComponent,
      PasswordDisplayComponent,
      PasswordControlsComponent,
      PasswordSettingsComponent,
    ],
    imports: [FormsModule],
  });
  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });
  it('should work', () => {
    const password = spectator.query('article');
    expect(password).toHaveText('Cliquez sur le bouton pour "Générer"');
  });
  it('should change message', () => {
    spectator.click('button');
    const password = spectator.query('article');
    expect(password).toHaveText('Un mot de passe super fort!!!');
  });
  it('should change props', () => {
    spectator.click('#uppercase');
    expect(component.settings.uppercase).toBeTrue();
    spectator.click('#numbers');
    expect(component.settings.numbers).toBeTrue();
    spectator.click('#symbols');
    expect(component.settings.symbols).toBeTrue();
    spectator.typeInElement('33', '#length');
    expect(component.settings.length).toBe(33);
  });
});
