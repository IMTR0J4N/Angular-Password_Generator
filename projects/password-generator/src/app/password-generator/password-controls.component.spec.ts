import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { PasswordControlsComponent } from './password-controls.component';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `<password-controls
    [password]="password"
    (generateEvent)="onGenerate()"
  ></password-controls>`,
})
class TestComponent {
  password?: string;
  onGenerate() {}
}

describe('PasswordControlsComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [PasswordControlsComponent],
  });
  beforeEach(() => {
    spectator = createComponent();
  });
  it('should emit event when user clicks the button', () => {
    const spy = spyOn(spectator.component, 'onGenerate');
    spectator.click('button');
    expect(spy).toHaveBeenCalled();
  });
  it('should not show a copy button', () => {
    expect(spectator.query('#copy')).toBeNull();
  });
  it('should  show a copy button if a password has been generated', () => {
    spectator.component.password = 'MOCK_PASSWORD';
    spectator.fixture.detectChanges();
    expect(spectator.query('#copy')).toBeTruthy();
  });
  it('should copy the password when user click the button', () => {
    const spy = spyOn(navigator.clipboard, 'writeText');
    spectator.setInput('password', 'MOCK_PASSWORD');
    spectator.click('#copy');
    expect(spy).toHaveBeenCalledWith('MOCK_PASSWORD');
    expect(spectator.query('#message')).toHaveText('Mot de passe copié');
  });
  it('should not show message when new password is generated', () => {
    const spy = spyOn(navigator.clipboard, 'writeText');
    spectator.setInput('password', 'MOCK_PASSWORD');
    spectator.click('#copy');
    // spectator.setInput('password', 'MOCK_PASSWORD_CHANGED');
    spectator.click('#generate');
    spectator.fixture.detectChanges();
    expect(spectator.query('#message')).toBeNull();
  });
});
