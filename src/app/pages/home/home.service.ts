import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
  
    constructor(private _http : HttpClient) { }
    countgame() : Observable<any>
    {
        return this._http.get<any>(`http://85.201.148.106:3000/user_game_platform/count_all`);
    }
}