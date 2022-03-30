import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Result } from '../findgame/findgame.service';
import { UserEntity } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {  }

  chk_user(user: UserEntity) {
    this._http
      .post<any>('http://85.201.148.106:3000/user/login', {
        Login: user.login,
        Password: user.password,
      })
      .subscribe((data) => {
        user.id = data[0].id;
        sessionStorage.setItem('id', data[0].id.toString());
        sessionStorage.setItem('login', data[0].login);
      });
  }

  add_user(user: UserEntity) {
    return this._http.post<UserEntity>('http://85.201.148.106:3000/user/add_user',user).subscribe();
  }

  logout() {
    sessionStorage.setItem('id', '0');
    sessionStorage.setItem('login', '');
    //sessionStorage.removeItem('id');
    //sessionStorage.removeItem('login');
  }
}
