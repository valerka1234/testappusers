import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})

export class AgePipe implements PipeTransform {
  transform (users, value) {
    return users.filter(user => {
      return user.age <= value;
    });
  }
}
