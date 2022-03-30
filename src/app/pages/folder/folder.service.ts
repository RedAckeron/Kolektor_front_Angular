import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../user/models/user.model';
import { FolderEntity } from './models/FolderEntity.model';
import { LocalGameEntity } from './models/localGameEntity.model';
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
    return await this._http.get<FolderEntity>("http://85.201.148.106:3000/").subscribe()
    }

  async service_count_for_user(user_id:number)
    {
      return await this._http.get<number>(`http://85.201.148.106:3000/user_game_platform/count_all_for_user/${user_id}`)
    }
    
  async service_get_for_user(user_id:number)
    {
    return await this._http.get<FolderEntity>(`http://85.201.148.106:3000/user_game_platform/show_all_for_user/${user_id}`)
    }

    async findById(id: number) //: Observable<LocalGameEntity>
    {
      return await this._http.get<LocalGameEntity>(`http://85.201.148.106:3000/game/show_one_by_id/${id}`);
    }



}
