import { Component, OnInit } from '@angular/core';
import { Result } from '../findgame/findgame.service';
import { UserEntity } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: UserEntity;

  constructor(private _userService: UserService) {
    this.user = new UserEntity();
  }

  ngOnInit(): void {}
  chk_user() {
    return this._userService.chk_user(this.user);
  }
  get_session_id() {
    return sessionStorage.getItem('id');
  }
}