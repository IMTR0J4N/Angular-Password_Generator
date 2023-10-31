import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclarationComponent } from './declaration.component';
import { DeclarationService } from './declaration.service';

class FakeService {
  calcul(revenus: number) {
    return revenus + 1000;
  }
}

describe('DeclarationService', () => {
  it('should show impot results', () => {
    TestBed.configureTestingModule({
      declarations: [DeclarationComponent],
      providers: [DeclarationService],
    });

    // TestBed.overrideComponent(DeclarationComponent, {
    //   set: {
    //     providers: [
    //       {
    //         provide: DeclarationService,
    //         useFactory: () => {
    //           return new FakeService();
    //         },
    //       },
    //     ],
    //   },
    // });

    let fixture: ComponentFixture<DeclarationComponent>;
    fixture = TestBed.createComponent(DeclarationComponent);
    fixture.autoDetectChanges(true);

    // const service = fixture.debugElement.injector.get(DeclarationService);
    // service.calcul = (revenus: number) => {
    //   //REPLACE COMPLEX CODE (HTTP REQUEST,...) BY SIMPLE CODE
    //   return revenus + 1000;
    // };
    // const spy = spyOn(service, 'calcul');
    // // spy.and.returnValue(2000);
    // spy.and.callFake((revenu) => {
    //   return revenu + 1000;
    // });
    const input = fixture.nativeElement.querySelector('input');
    input.value = '1000';
    fixture.nativeElement.querySelector('button').click();
    expect(
      fixture.nativeElement.querySelector('article').textContent
    ).toContain('2000');
  });
});
