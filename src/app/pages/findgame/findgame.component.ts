import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../user/models/user.model';
import { FindgameService, Result } from './findgame.service';
import { GameEntity } from './models/GameEntity.model';
import { PlatformEntity } from './models/PlatformEntity.model';

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
  selectedplatform: any | null = null;
  selectedPlatform: any | null = null;
  
  user_id : number

  constructor(private _service : FindgameService) {
    this.user_id = parseInt(sessionStorage.getItem("id"))
    //console.table(this.user_id)
  }
  searchgame()
  {
    this._service.findname(this.namegame).subscribe(result=> 
      {
      this.gamesWithPlatform = [];
      this.games = result.results;
      this.games.forEach(game => {this.gamesWithPlatform.push({id: game.id, name: game.name,platforms : game.platforms})});
      });
  }

  ngOnInit(): void {
  }

  handleSendAction() {
    
    //creation de l objet qui vas etre envoyer au postman
    let ittosend = new GameEntity()
    //id user
    //ittosend.id_user=this.user_id
    
    //recuperation du row id et de l id du jeux et decoupage de l id du jeux
    let sg_tmp:string=this.selectedGame
    sg_tmp.toString
    let sg_array_tmp = sg_tmp.split(",")
    ittosend.api_id_game=parseInt(sg_array_tmp[1])
    
    
    //recuperation des données du jeux additionel via l api
    this._service.findById(ittosend.api_id_game).subscribe((it: any) => 
    {
    //recuperation du nom du jeux
    ittosend.title=it.name
    //recuperation de la date de sortie et convertion en ts -1h de gmt
    ittosend.dt_release=(((Date.parse(it.released))/1000)-3600)
    //console.table(ittosend)
    this._service.addGame(ittosend);
    })
    
    //creation de l objet qui vas etre envoyer au postman
    let platformtosend = new PlatformEntity()
    //recuperation de l id plateforme
    platformtosend.Api_id_platform=parseInt(this.selectedPlatform)
    //recuperation du reste des info de la platform via l api
    this._service.platform_show_one(this.selectedPlatform).subscribe((itpf: any) =>  {
    platformtosend.Title=itpf.name
    console.table(platformtosend)
    this._service.Platform_add_one(platformtosend);
    })
    

    //const newGame = this._service.addGame(ittosend)
    //this._service.addGameToUser(newGame.id, user.id)
 




    
    //recuperation de la date d insertion 
    //ittosend.dt_in=0
    //console.table(this)
    //ittosend.dt_release=0



    //console.table(ittosend)

    //this._service.findById(this.selectedGame).subscribe((it: any) => {console.table(it)})
    //ittosend.api_id_game=0
    //ittosend.api_id_platform=0 
    


    //var myDate = "26-02-2012";
/*
    myDate = myDate.split("-");
    var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    console.log(newDate.getTime());
    
    
    ittosend.dt_release="0"





    ittosend.title="0"

    //console.log(it.platforms.length)
    
    //transformation de it vers model gameentity
    

    //ittosend.title=it.name;
    //ittosend.dt_release=it.released;
*/
    //this._service.addGame(ittosend)
    //});
    }
}