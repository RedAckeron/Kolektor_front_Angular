import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from 'src/app/pages/user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private _http: HttpClient) {  }

  chk_user(user: UserEntity) {
    this._http
      .post<any>('http://localhost:3000/user/login', {
        Login: user.login,
        Password: user.password,
      })
      .subscribe((data) => {
        user.id = data[0].id;
        sessionStorage.setItem('id', data[0].id.toString());
        sessionStorage.setItem('login', data[0].login);
      });
  }
  
  logout() {
    sessionStorage.setItem('id', '0');
    sessionStorage.setItem('login', '');
    //sessionStorage.removeItem('id');
    //sessionStorage.removeItem('login');
  }
}
