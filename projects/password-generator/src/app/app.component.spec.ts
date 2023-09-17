import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });
  it('should work', /*async*/ () => {
    // await TestBed.configureTestingModule({
    //   declarations: [AppComponent],
    // }).compileComponents();
    // => si html/css en dehors du TS

    // PASSE DANS LE BEFOREEACH
    // TestBed.configureTestingModule({
    //   declarations: [AppComponent],
    // });
    // const fixture = TestBed.createComponent(AppComponent);
    const h1 = fixture.nativeElement.querySelector('h1') as HTMLElement;

    expect(h1.textContent).toBe('Générez un mot de passe fort !');

    // fixture.detectChanges();

    const password = fixture.nativeElement.querySelector(
      'article'
    ) as HTMLElement;
    expect(password.textContent).toBe('Cliquez sur le bouton pour "Générer"');
  });
  it('should change message', () => {
    // TestBed.configureTestingModule({
    //   declarations: [AppComponent],
    // });
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.autoDetectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    // fixture.detectChanges();
    const password = fixture.nativeElement.querySelector(
      'article'
    ) as HTMLElement;
    expect(password.textContent).toBe('Un mot de passe super fort!!!');
  });
  it('should change props', () => {
    // TestBed.configureTestingModule({
    //   declarations: [AppComponent],
    // });
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.autoDetectChanges();
    fixture.nativeElement.querySelector('#uppercase').click();
    expect(component.uppercase).toBeTrue();
    fixture.nativeElement.querySelector('#numbers').click();
    expect(component.numbers).toBeTrue();
    fixture.nativeElement.querySelector('#symbols').click();
    expect(component.symbols).toBeTrue();
    const lengthInput = fixture.nativeElement.querySelector(
      '#length'
    ) as HTMLInputElement;
    lengthInput.value = '33';
    lengthInput.dispatchEvent(new Event('input'));

    expect(component.length).toBe(33);
  });
});
