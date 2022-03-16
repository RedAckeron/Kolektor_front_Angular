import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {




  /*
  private countGame$: Observable<any> | null = null;
  get CountGame$(): Observable<any> | null { return this.countGame$; }

  */
 countGame: any;/*
  get CountGame(): any { return this.countGame; }

  private subscription: Subscription | undefined = undefined;
  */
  constructor(private $homeService: HomeService) {}


  ngOnInit(): void {
    this.$homeService.countgame().subscribe((it: any) => this.countGame = it)
    /*
    this.countGame$ = this.$homeService.countgame()?.pipe(map(it => it * 2));
    //Subscribe renvoie une souscription 
    // this.subscription = this.countGame$.subscribe(it => this.countGame = it);
    */
  }

/*
  getCountGame() {
    this.subscription = this.countGame$?.subscribe(it => this.countGame = it);
  }
*/

  ngOnDestroy(): void {
    console.log("DESTROY");
      //this.subscription?.unsubscribe();
  }
  
}
