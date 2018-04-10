import {Component} from '@angular/core';
import { UsersService } from './users.service';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, OrderPipe]
})
export class AppComponent {

}
