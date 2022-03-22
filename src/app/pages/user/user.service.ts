import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserEntity } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {}
  chk_user(user:UserEntity)
    {
    this._http.post<any>('http://localhost:3000/user/login',{"Login":user.login,"Password":user.password}).subscribe(data => 
      {
      console.table(data[0])
      user.id=data[0].id;
      sessionStorage.setItem('id',user.id.toString());
      });
    }
}