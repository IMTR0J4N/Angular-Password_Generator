import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { PasswordGeneratorService } from './password-generator/password-generator.service';
import { PasswordGeneratorModule } from './password-generator/password-generator.module';

describe('AppComponent avec TestBed', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [PasswordGeneratorModule],
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
    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, 'generate');

    spy.and.returnValue('Un mot de passe super fort!!!');
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
  it('should show a copy button when password was generated', () => {
    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, 'generate');
    spy.and.returnValue('MOCK_PASSWORD');
    fixture.nativeElement.querySelector('#generate').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#copy')).not.toBeNull();
  });
});

describe('AppComponent avec Spectator', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
    imports: [PasswordGeneratorModule],
    mocks: [PasswordGeneratorService],
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
    const service = spectator.inject(PasswordGeneratorService);
    service.generate.and.returnValue('Un mot de passe super fort!!!');
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
  it('should show a copy button when password was generated', () => {
    const service = spectator.inject(PasswordGeneratorService);
    service.generate.and.returnValue('MOCK_PASSWORD');
    spectator.click('#generate');

    expect(spectator.query('#copy')).not.toBeNull();
  });
});
