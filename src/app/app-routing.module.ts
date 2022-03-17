import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindgameComponent } from './pages/findgame/findgame.component';
import { HomeComponent } from './pages/home/home.component';
import { StatsComponent } from './pages/stats/stats/stats.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'findgame',component:FindgameComponent},
  {path:'stats',component:StatsComponent},
  {path:'**',redirectTo:'/home'}


  //{path : 'chemin', component: composantquiseracharger}
  //dans l url si on rajoute /home le composant home sera charger 
  /*
  {path : 'home',component:findgame },
  
  {path : 'bindings',component: BindingsComponent},
  {path : 'exo1',component: Exo1Component},
  {path : 'StructDirective',component: StructDirectiveComponent},
  {path : 'binding2Ways',component: Bindings2WaysComponent},
  {path : 'about',component: AboutComponent},
  {path:'**',redirectTo:'/home'}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
