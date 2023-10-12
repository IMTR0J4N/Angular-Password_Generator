import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world</h1>
    <a href="#" *repeat="page; let numero">LIEN {{ numero }}</a>
    <button (click)="page = page + 1">AJOUTER PAGE</button>
    <p *if="age > 18; else sinon">J UTILISE LA MICROSYNTHAXE</p>
    <ng-template [if]="age > 18" [ifElse]="sinon">
      <p>Je suis un p qui apparait</p>
    </ng-template>
    <ng-template #sinon>
      <p>Je suis un p qui apparait dans le deuxieme cas</p>
    </ng-template>
    <button (click)="age = 15">Changer AGE</button>
    <p
      (color-change)="onColorChange($event)"
      #paragraphe="hl"
      appHighlight="blue"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
      officia ex suscipit placeat eum ipsa?
    </p>
    <button (click)="paragraphe.onMouseEnter()">Changer la couleur</button>
    <!-- <input
      type="number"
      [model]="revenu"
      (model-change)="changeInput($event)"
      placeholder="vos revenus"
    /> -->
    <!-- <input
      type="number"
      [model]="revenu"
      (modelChange)="revenu = $event"
      placeholder="vos revenus"
    /> -->
    <input type="number" [(model)]="revenu" placeholder="vos revenus" />
    <button (click)="calculImpot()">Calculer IMPOTS</button>
    <input type="text" force-lower value="LIOR" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias libero
      ipsam eum obcaecati aliquam debitis architecto incidunt ex, deleniti
      voluptatibus vel. Deserunt, quod esse.
    </p>
    <input type="text" #prenom />
    <button (click)="addUser(prenom.value)">Add user</button>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque obcaecati
      dolore vel corrupti! Praesentium, deserunt.
    </p>
    <p><a no-open href="http://www.google.fr">google</a></p>
    <p>
      <a confirm [confirmMessage]="title" href="http://www.twitter.fr"
        >twitter</a
      >
    </p>
    <p>change from child {{ counter }}</p>
    <app-user-profile
      [fromParent]="3 + 3"
      *ngFor="let user of users"
      [user]="user"
      (changeCasseEvent)="changeCasse($event)"
    ></app-user-profile> `,
  styles: [],
})
export class AppComponent {
  page = 3;
  age = 40;
  @ViewChild('prenom')
  prenom?: ElementRef<HTMLInputElement>;

  revenu = 333;
  // changeInput(value: number) {
  //   this.revenu = value;
  // }
  calculImpot() {
    console.log('je calcule les impot avec :', this.revenu);
  }

  addUser(user: string) {
    this.users.push({
      id: this.users[this.users.length - 1].id + 1,
      name: this.prenom ? this.prenom.nativeElement.value : 'pas de prenom',
      hired: false,
    });
  }
  title = 'playground';
  counter = 0;
  users = [
    { id: 1, name: 'bob', hired: false },
    { id: 2, name: 'bobette', hired: false },
  ];

  changeCasse(id: number) {
    this.users.map((user) => {
      console.log(id);
      if (user.id === id) {
        user.name = user.name.toUpperCase();
      }
    });
  }

  ngAfterViewInit() {
    if (this.prenom) {
      this.prenom.nativeElement.value = 'veuillez mettre un prenom valide';
    }
  }
  onColorChange(s: string) {
    console.log(`la couleur a changée ${s}`);
  }
}
