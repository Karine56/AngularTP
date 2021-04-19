import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP 10 Angular - Formulaire méthode réactive';
  eleve = "Karine GIRARDIN";

  constructor( private router:Router) {
    // force, au démarrage, le path auth pour l'avoir dans l'url
    //this.router.navigate(['listeville']);
    this.router.navigate(['auth']);
  }
}
