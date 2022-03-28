import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from '../user/models/user.model';
import { FolderEntity } from './models/FolderEntity.model';
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  user = new UserEntity
  constructor(private _http : HttpClient) {
  this.user.id= parseInt( sessionStorage.getItem('id'))
  }
folder_data:FolderEntity

  async show_all_game()
    {
    return await this._http.get<FolderEntity>("http://localhost:3000/").subscribe()
    }

  async service_count_for_user(user_id:number)
    {
      this._http.get<number>(`http://localhost:3000/user_game_platform/count_all_for_user/${user_id}`).subscribe((data) => {return data})
    }
    
  async service_get_for_user(user_id:number)
    {
    return await this._http.get<FolderEntity>(`http://localhost:3000/user_game_platform/show_all_for_user/${user_id}`)
    }




}
