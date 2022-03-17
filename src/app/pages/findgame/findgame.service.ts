import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  addGame(it: any)
    {
    return this._http.post<any>("https://localhost:3000/game", it).subscribe(data => {console.log(data)})
    
    
    }
}

export class Result {
  count! : number;
  results! : any[];
}