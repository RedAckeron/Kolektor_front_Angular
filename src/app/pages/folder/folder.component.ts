import { Component, OnInit } from '@angular/core';
import { FindgameService } from '../findgame/findgame.service';
import { FolderService } from './folder.service';
import { FolderEntity } from './models/FolderEntity.model';
import { LocalGameEntity } from './models/localGameEntity.model';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  user_id: any;
  cntAllGame: any
  gamesForUser: FolderEntity;
  GameToHtml=[];

  constructor(private _service: FolderService) {
    this.user_id = parseInt(sessionStorage.getItem("id"));

  }

  ngOnInit(): void {
    this.count_game_for_user(this.user_id).then(data => data.subscribe(cnt => this.cntAllGame = cnt));
    //console.dir(this)
    //this.get_game_for_user(this.user_id).then(data=>{data.subscribe(c=>{this.gamesForUser=c;console.table(c);}); });

    this.get_game_for_user(this.user_id).then(data => {
      data.subscribe(c => {
        this.gamesForUser = c;
        
        for (const index in this.gamesForUser) {
          
          let fld_tmp: LocalGameEntity = new LocalGameEntity()

          this._service.findById(this.gamesForUser[index].api_id_game)
          .then(data => data.subscribe(data_game=>{
            console.log(data_game);
            
            fld_tmp.title = data_game[0].title
            fld_tmp.dt_release = data_game[0].dt_release
            fld_tmp.dt_in = this.gamesForUser[index].dt_in
            fld_tmp.id = this.gamesForUser[index].id
            fld_tmp.api_id_game = this.gamesForUser[index].api_id_game
            fld_tmp.cib_box=this.gamesForUser[index].cib_box.data[0]
            fld_tmp.cib_manual=this.gamesForUser[index].cib_manual.data[0]
            fld_tmp.cib_game=this.gamesForUser[index].cib_game.data[0]
            
            console.table(fld_tmp)

            this.GameToHtml.push(fld_tmp)
            
          }))

         

          //console.table(this.gamesForUser[index])
          //this._service.findById(fld_tmp.api_id_game).then(fromnest=>fromnest.subscribe(g=>console.log(g)))



        }
      });
    });

    console.table(this.GameToHtml)





  }

  count_game_for_user(user_id: number) {
    return this._service.service_count_for_user(user_id)
  }

  get_game_for_user(user_id: number) {
    return this._service.service_get_for_user(user_id)
  }




}
