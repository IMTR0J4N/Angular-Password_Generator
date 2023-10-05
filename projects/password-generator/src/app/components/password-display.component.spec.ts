import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import { PasswordDisplayComponent } from './password-display.component';

describe('password-display', () => {
  let spectator: SpectatorHost<PasswordDisplayComponent>;
  const createComponent = createHostFactory({
    component: PasswordDisplayComponent,
  });
  beforeEach(() => {
    spectator = createComponent(
      `<password-display message="MOCK_MESSAGE"></password-display>`
    );
  });
  it('should display the input message', () => {
    expect(spectator.query('article')).toHaveText('MOCK_MESSAGE');
  });
});
