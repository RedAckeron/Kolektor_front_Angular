import { HomeService } from './pages/home/home.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FindgameComponent } from './pages/findgame/findgame.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './pages/stats/stats/stats.component';
import { CollectionComponent } from './pages/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindgameComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    StatsComponent,
    CollectionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService,],
  bootstrap: [AppComponent]
})
export class AppModule { }