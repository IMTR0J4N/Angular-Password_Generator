import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import { PasswordDisplayComponent } from './password-display.component';

describe('password-display', () => {
  let spectator: SpectatorHost<PasswordDisplayComponent>;
  const createComponent = createHostFactory({
    component: PasswordDisplayComponent,
  });

  it('should display the input message', () => {
    spectator = createComponent(
      `<password-display password="MOCK_MESSAGE"></password-display>`
    );
    expect(spectator.query('article')).toHaveText('MOCK_MESSAGE');
  });
  it('should display the alternative message when there is no input', () => {
    spectator = createComponent(`<password-display></password-display>`);
    expect(spectator.query('article')).toHaveText(
      'Cliquez sur le bouton pour "Générer"'
    );
  });
});
