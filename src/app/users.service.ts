import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class UsersService {

  size = 12;
  arr = [false, true];
  rand;

  constructor(private http: Http) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,phone,email,dob&results=' + this.size + '&nat=us')
      .map(response => response.json()
      )
      .map(response => response.results)
      .map(users => {
        return users.map(
          user => {
            this.rand = Math.floor(Math.random() * this.arr.length);
            return {
              name: user.name.first + ' ' + user.name.last,
              status: this.arr[this.rand],
              gender: user.gender,
              phone: user.phone,
              email: user.email,
              image: user.picture.large,
              geo: '( ' + user.location.postcode + ' ) ' + user.location.city + ' ' + user.location.state + ' ' + user.location.street,
              dob: moment(user.dob).format('D MMM, YYYY'),
              age: moment(new Date()).diff(user.dob, 'years')
            };
          }
        );
      });
  }

  setSize(size) {
    this.size = size;
  }

}
