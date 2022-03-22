import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {}
  chk_user(user:UserEntity)
    {
    let id_user = 0;
    //this._http.post<any>('http://localhost:3000/user/login',{"Login":user.login,"Password":user.password}).subscribe(data => {id_user=data.id});
    this._http.post<any>('http://localhost:3000/user/login',{"Login":user.login,"Password":user.password}).subscribe(data => {
    user.id=data[0].id
      //console.log(data[0].id)
    });

    
  }
}
