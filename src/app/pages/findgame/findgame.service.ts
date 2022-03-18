import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameEntity } from './models/GameEntity.model';

@Injectable({
  providedIn: 'root'
})
export class FindgameService {

  constructor(private _http : HttpClient) { }

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
    console.log(ittosend)

    //return this._http.post<GameEntity>("http://localhost:3000/game", ittosend).subscribe(data => {console.log(data.id)})
    return this._http.post<GameEntity>("http://localhost:3000/game", {"Title":ittosend.title,"Dt_release":ittosend.dt_release,"Dt_in":ittosend.dt_in}).subscribe(data => {console.log(data.id)})
    
    
    }
}

export class Result {
  count! : number;
  results! : any[];
}