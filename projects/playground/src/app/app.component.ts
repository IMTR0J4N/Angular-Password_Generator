import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('prenom')
  prenom?: ElementRef<HTMLInputElement>;

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
}
