import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  @Input()
  fromParent: string | number | undefined;

  link = 'http://test.fr';

  @Input()
  user = { id: 0, name: '', hired: false };

  @Output()
  changeCasseEvent = new EventEmitter<number>();

  change(id: number) {
    this.changeCasseEvent.emit(id);
  }
}
