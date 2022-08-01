import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../user/models/user.model';
import { FindgameService, Result } from './findgame.service';
import { GameEntity } from './models/GameEntity.model';
import { PlatformEntity } from './models/PlatformEntity.model';
import { User_game_platform_Entity } from './models/user_game_platform.model';

@Component({
  selector: 'app-findgame',
  templateUrl: './findgame.component.html',
  styleUrls: ['./findgame.component.scss']
})
export class FindgameComponent implements OnInit {
  namegame: string = "";
  games: any[] = [];
  chkgame: boolean = true;
  gamesWithPlatform: any[] = [];
  selectedGame: any | null = null;
  selectedplatform: any | null = null;
  selectedPlatform: any | null = null;
  cib_box: boolean
  cib_manual: boolean
  cib_game: boolean
  user_id: number
  game_added:boolean=false

  constructor(private _service: FindgameService) {
    //this.user_id = parseInt(sessionStorage.getItem("id"))
    //console.table(this.user_id)
  }
  searchgame() {
    this._service.findname(this.namegame).subscribe(result => {
      //console.table(result)
      this.gamesWithPlatform = [];
      this.games = result.results;
      this.games.forEach(game => { this.gamesWithPlatform.push({ id: game.id, name: game.name, platforms: game.platforms }) });
    });
  }

  ngOnInit(): void {
    this.user_id = parseInt(sessionStorage.getItem("id"))

  }

  handleSendAction() {

    //creation de l objet qui vas etre envoyer au postman
    let ittosend = new GameEntity()
    //id user
    //ittosend.id_user=this.user_id

    //recuperation du row id et de l id du jeux et decoupage de l id du jeux
    let sg_tmp: string = this.selectedGame
    sg_tmp.toString
    let sg_array_tmp = sg_tmp.split(",")
    ittosend.api_id_game = parseInt(sg_array_tmp[1])

    //recuperation des données du jeux additionel via l api
    this._service.findById(ittosend.api_id_game).subscribe((it: any) => {
      console.log(it)
      //recuperation du nom du jeux
      ittosend.title = it.name
      ittosend.img=it.background_image
      //recuperation de la date de sortie et convertion en ts -1h de gmt
      ittosend.dt_release = (((Date.parse(it.released)) / 1000) - 3600)
      console.table(ittosend)
      this._service.addGame(ittosend);
      this.game_added=true;
      this.chkgame=true;
      this.namegame="";
      
    })

    //creation de l objet qui vas etre envoyer au postman
    let platformtosend = new PlatformEntity()
    //recuperation de l id plateforme
    platformtosend.Api_id_platform = parseInt(this.selectedPlatform)
    //recuperation du reste des info de la platform via l api
    this._service.platform_show_one(this.selectedPlatform).subscribe((itpf: any) => {
      platformtosend.Title = itpf.name
      this._service.Platform_add_one(platformtosend);

    })

    //creation de l objet qui vas etre envoyer au postman
    let User_game_platform = new User_game_platform_Entity()
    User_game_platform.Id_user = this.user_id
    User_game_platform.Api_id_game = parseInt(sg_array_tmp[1])
    User_game_platform.Api_id_platform = parseInt(this.selectedPlatform)
    User_game_platform.Cib_box = this.cib_box
    User_game_platform.Cib_manual = this.cib_manual
    User_game_platform.Cib_game = this.cib_game
    this._service.user_game_platform_add_one(User_game_platform)
  }
}