import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})

export class SetupPageComponent implements OnInit {

  size;

  constructor(private usersServise: UsersService) { }

  ngOnInit() {
    this.size = this.usersServise.size;
  }

  onChange() {
    this.usersServise.setSize(+this.size);
  }

}
