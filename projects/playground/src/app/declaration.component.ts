import { Component } from '@angular/core';
import { DeclarationService } from './declaration.service';

@Component({
  selector: 'declaration',
  template: `
    <h3>HELLO FROM DECLARATION</h3>
    <input #revenu type="number" placeholder="Declarez vos revenus" />
    <button (click)="onClickDeclaration(revenu.valueAsNumber)">Declarer</button>
    <article>Vos impots: {{ resultat }}</article>
  `,
  // providers: [
  //   // {
  //   //   provide: DeclarationService,
  //   //   // useFactory: () => {
  //   //   //   return new DeclarationService();
  //   //   // },
  //   //   useClass: DeclarationService,
  //   // },
  //   DeclarationService,
  // ],
})
export class DeclarationComponent {
  resultat = 0;

  constructor(private declarationService: DeclarationService) {}

  onClickDeclaration(revenu: number) {
    this.resultat = this.declarationService.calcul(revenu);
  }
}
