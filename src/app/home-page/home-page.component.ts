import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {

  users = [];
  local_users = [];
  searchUser = '';
  age = 50;
  gender = null;
  status = false;
  order = 'name';
  reverse = false;
  name_order = 'name_asc';

  collection = [
    {
      label: 'name',
      options: [
        {
          label: 'name_asc',
          value: 'Name_asc',
          reverse: false
        }, {
          label: 'name_desc',
          value: 'Name_desc',
          reverse: true
        }
      ]
    }, {
      label: 'age',
      options: [
        {
          label: 'age_asc',
          value: 'Age_asc',
          reverse: false
        }, {
          label: 'age_desc',
          value: 'Age_desc',
          reverse: true
        }
      ]
    }, {
      label: 'gender',
      options: [
        {
          label: 'gender_asc',
          value: 'Gender_asc',
          reverse: false
        }, {
          label: 'gender_desc',
          value: 'Gender_desc',
          reverse: true
        }
      ]
    }
    ];

  constructor(private usersService: UsersService, private orderPipe: OrderPipe) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.local_users = users;
      this.users = this.orderPipe.transform(this.local_users, this.order);
    });
  }

  SortUsers( value: string, type: boolean) {
    console.log(type + ' : ' + this.reverse + ' : ' + value);
  }

  SetGender(value) {
    this.gender = value;
  }

}
