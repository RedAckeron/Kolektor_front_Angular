import { HomeService } from './pages/home/home.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FindgameComponent } from './pages/findgame/findgame.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './pages/stats/stats.component';
import { UserComponent } from './pages/user/user.component';
import { FolderComponent } from './pages/folder/folder.component';
import { PlatformComponent } from './pages/folder/platform/platform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindgameComponent,
    FooterComponent,
    HomeComponent,
    StatsComponent,
    UserComponent,
    FolderComponent,
    PlatformComponent
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