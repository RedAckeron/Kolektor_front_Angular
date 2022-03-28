import { Component, OnInit } from '@angular/core';
import { FolderService } from './folder.service';
import { FolderEntity } from './models/FolderEntity.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  user_id : any;
  cntAllGame:any
  gamesForUser: any;
  
  constructor(private _service : FolderService) {
    this.user_id = parseInt(sessionStorage.getItem("id"));
    }
   
  ngOnInit(): void { 
    this.cntAllGame = this.count_game_for_user(this.user_id);
    this.get_game_for_user(this.user_id).then(data=>{data.subscribe(c=>{this.gamesForUser=c;console.table(c);}); });
  }

  count_game_for_user(user_id:number)
    {
    return this._service.service_count_for_user(user_id)
    }

  get_game_for_user(user_id:number)
    {
    return this._service.service_get_for_user(user_id)
    }




}
