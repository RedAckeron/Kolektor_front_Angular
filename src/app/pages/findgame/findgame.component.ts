import { Component, OnInit } from '@angular/core';
import { FindgameService, Result } from './findgame.service';

@Component({
  selector: 'app-findgame',
  templateUrl: './findgame.component.html',
  styleUrls: ['./findgame.component.scss']
})
export class FindgameComponent implements OnInit {
  namegame : string="";
  games : any[] = [];

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

add_game(namegame : string){

}
  ngOnInit(): void {
  }

  handleSendAction() {
    console.log(this.selectedGame);
    this._service.findById(this.selectedGame).subscribe((it: any) => console.log(it));
  }
}
