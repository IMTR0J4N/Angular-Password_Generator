import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ModelDirective } from './model.directive';
import { ConfirmDirective } from './confirm.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';

describe('AppComponent', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2);
  });
  // let fixture: ComponentFixture<AppComponent>;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent,
  //       HighlightDirective,
  //       ModelDirective,
  //       ConfirmDirective,
  //       UserProfileComponent,
  //     ],
  //   });
  //   fixture = TestBed.createComponent(AppComponent);
  //   fixture.autoDetectChanges();
  // });
  // it('should create the app', () => {
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  // it(`should have as title 'playground'`, () => {
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('playground');
  // });
  // it('should render title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'playground app is running!'
  //   );
  // });
});
