import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})

export class GenderPipe implements PipeTransform {
  transform (users, value) {
    if (value === null) {
      return users;
    } else {
      return users.filter(user => {
        return user.gender === value;
      });
    }
  }
}
