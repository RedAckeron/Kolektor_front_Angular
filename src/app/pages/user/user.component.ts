import { Component, OnInit } from '@angular/core';
import { UserEntity } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: UserEntity;
  chkInput: boolean = true;

  constructor(private _userService: UserService) {
    this.user = new UserEntity();
    this.user.register_login = '';
    this.user.register_password = '';
    if (sessionStorage.getItem('id') === null)
      sessionStorage.setItem('id', '0');
    this.user.id=parseInt(sessionStorage.getItem('id'));
    this.user.login = sessionStorage.getItem('login');
  }

  ngOnInit(): void {}

  chk_user() {
    return this._userService.chk_user(this.user);
  }

  add_user() {
    let usertosend = new UserEntity();
    usertosend.Login = this.user.register_login;
    usertosend.Password = this.user.register_password;
    //usertosend.dt_in = Date.now() / 1000;
    //usertosend.dt_last_log = Date.now() / 1000;
    return this._userService.add_user(usertosend);
  }

  get_session_id() {
    return sessionStorage.getItem('id');
  }

  chk_input() {
    if (
      this.user.register_login.length >= 5 &&
      this.user.register_password.length >= 8
    )
      this.chkInput = false;
    else this.chkInput = true;
  }

  logout() {
    this._userService.logout();
    this.user.id = 0;
    this.user.login = '';
    this.user.password = '';
  }
}
