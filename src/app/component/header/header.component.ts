import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, ROUTES, RoutesRecognized } from '@angular/router';
import { UserEntity } from 'src/app/pages/user/models/user.model';
import { UserService } from 'src/app/pages/user/user.service';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user_id : number
  user: UserEntity;
  user_login:string
  constructor(private headerService: HeaderService) {
    this.user = new UserEntity();
    this.user_id = parseInt(sessionStorage.getItem("id"))
    this.user_login=sessionStorage.getItem("login");
   }

  ngOnInit(): void {
   this.user_id = parseInt(sessionStorage.getItem("id"))
   console.log("constructeur : "+this.user_id)

  }

chk_connected()
  {
  let output:boolean=true
  let result = parseInt(sessionStorage.getItem("id"))
  if(result===0) output=false
  return output
  }

  chk_user() {
    return this.headerService.chk_user(this.user);
  }
  logout() {
    this.headerService.logout();
    this.user.id = 0;
    this.user.login = '';
    this.user.password = '';
    window.location.replace("/home");
  }
  
}