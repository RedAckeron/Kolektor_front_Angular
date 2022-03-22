import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kolektor';
  
  
  //sauvegarde de la session
  saveData()
    {
      sessionStorage.setItem('id','1');
    }
}
