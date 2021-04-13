import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP 06 Angular - Routes';
  eleve = "Karine GIRARDIN";

  constructor( private router:Router) {
    // force, au démarrage, le path auth pour l'avoir dans l'url
    //this.router.navigate(['listeville']);
    this.router.navigate(['auth']);
  }
}
