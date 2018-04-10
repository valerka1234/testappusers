import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})

export class StatusPipe implements PipeTransform {
  transform (users, value) {
    if (value === false) {
      return users;
    } else {
      return users.filter(user => {
        return user.status === value;
      });
    }
  }
}
