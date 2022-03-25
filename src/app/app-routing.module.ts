import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindgameComponent } from './pages/findgame/findgame.component';
import { HomeComponent } from './pages/home/home.component';
import { StatsComponent } from './pages/stats/stats.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'findgame',component:FindgameComponent},
  {path:'stats',component:StatsComponent},
  {path:'user',component:UserComponent},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }