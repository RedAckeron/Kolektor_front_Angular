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
        return this._http.get<any>(`http://localhost:3000/game/count`);
    }
}
