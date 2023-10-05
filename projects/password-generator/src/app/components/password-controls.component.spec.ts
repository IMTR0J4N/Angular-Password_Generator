import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { PasswordControlsComponent } from './password-controls.component';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `<password-controls
    (generateEvent)="onGenerate()"
  ></password-controls>`,
})
class TestComponent {
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
});
