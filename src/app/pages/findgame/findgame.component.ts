import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FindgameService, Result } from './findgame.service';
import { GameEntity } from './models/GameEntity.model';

@Component({
  selector: 'app-findgame',
  templateUrl: './findgame.component.html',
  styleUrls: ['./findgame.component.scss']
})
export class FindgameComponent implements OnInit {
  namegame : string="";
  games : any[] = [];
  chkgame : boolean = true;
  gamesWithPlatform: any[] = [];
  selectedGame: any | null = null;

  constructor(private _service : FindgameService) { }
  searchgame()
    {
      this._service.findname(this.namegame).subscribe(result=> {
        this.gamesWithPlatform = [];
        this.games = result.results;
        this.games.forEach(game => {
          game.platforms
            ?.map((p: any) => p.platform.name)
            .forEach((p: any) => {
              this.gamesWithPlatform.push({id: game.id, name: game.name, platform: p});
            })
        })
      });
    }


  ngOnInit(): void {
  }

  handleSendAction() {
    this._service.findById(this.selectedGame).subscribe((it: any) => {
    
    //transformation de it vers model gameentity
    let ittosend = new GameEntity()
    ittosend.title=it.name;
    ittosend.dt_release=it.released;
    ittosend.dt_in=0;
    this._service.addGame(ittosend)
    });
  }
}