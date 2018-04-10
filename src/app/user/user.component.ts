import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  @Input() user;
  isMarked = false;

  onClick() {
    if (this.isMarked !== true) {
      this.isMarked = true;
    } else {
      this.isMarked = false;
    }
  }

}
