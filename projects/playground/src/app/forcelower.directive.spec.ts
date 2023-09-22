import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceLowerDirective } from './forcelower.directive';
import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

@Component({
  selector: 'test',
  template: ` <input type="text" force-lower value="TEST_VALUE" /> `,
})
class TestComponent {}

describe('force lower directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForceLowerDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.autoDetectChanges();
  });

  it('should be lower at begin', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const value = input.value;
    expect(value).toBe('test_value');
  });
  it('should be lower on change', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'ANOTHER TEST';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('another test');
  });
});

describe('force lower avec spectator directive', () => {
  let spectator: SpectatorDirective<ForceLowerDirective>;
  const createDirective = createDirectiveFactory({
    directive: ForceLowerDirective,
  });

  beforeEach(() => {
    spectator = createDirective(`
    <input force-lower value="MOCK TEST" type="text">
    `);
  });

  it('should be lower', () => {
    expect(spectator.query('input')).toHaveValue('mock test');
  });
  it('should be lower when typing', () => {
    spectator.typeInElement('QWERTY', 'input');
    expect(spectator.query('input')).toHaveValue('qwerty');
  });
});
