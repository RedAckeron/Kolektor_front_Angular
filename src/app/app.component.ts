import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kolektor';
  /*
  //sauvegarde de la session
  saveData(id_tmp:string)
    {
      sessionStorage.setItem('id',id_tmp);
    }
  //renvoi de l id de la sesion user
  getData()
    {
      return sessionStorage.getItem('id');
    }
  */
}
