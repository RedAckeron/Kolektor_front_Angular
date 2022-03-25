import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../user/models/user.model';
import { GameEntity } from './models/GameEntity.model';
import { PlatformEntity } from './models/PlatformEntity.model';

@Injectable({
  providedIn: 'root'
})
export class FindgameService {
user = new UserEntity
  constructor(private _http : HttpClient) {

    this.user.id= parseInt( sessionStorage.getItem('id'))
    
    //console.log(sessionStorage.getItem('id')) 
  }

  findname(namegame : string) : Observable<Result>
    {
    return this._http.get<Result>(`https://api.rawg.io/api/games?key=f17b77b881b9445eb586f747c870f921&search=${namegame}&page_size=200`);
    }

  findById(id: number) 
    {
      return this._http.get<any>(`https://api.rawg.io/api/games/${id}?key=f17b77b881b9445eb586f747c870f921`);
    }
  
  addGame(ittosend: GameEntity)
    {
    return this._http.post<GameEntity>("http://localhost:3000/game/add_one", ittosend).subscribe()
    }

  platform_show_one(id: number) 
    {
    return this._http.get<any>(`https://api.rawg.io/api/platforms/${id}?key=f17b77b881b9445eb586f747c870f921`);
    }
  Platform_add_one(platformtosend: PlatformEntity)
    {
    return this._http.post<PlatformEntity>("http://localhost:3000/platform/add_one", platformtosend).subscribe()
    }
}

export class Result {
  count! : number;
  results! : any[];
}