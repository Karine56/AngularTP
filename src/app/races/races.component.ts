import { Component, Input, OnInit } from '@angular/core';
import { VilleModel} from '../models/ville.model';
import { AppareilService } from '../service/Appareil.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

    villes: any[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
      // va chercher les valeurs via définies dans le service
    this.villes = this.appareilService.villes;
  }

  onAllumer() {
    if(confirm('Etes vous sûr de vouloir allumer ?')) {
        this.appareilService.switchOnAll;
        console.log(this.appareilService.villes)
    }
    else {
        return null;
    }
  }

  onEteindre() {
      if(confirm('Etes vous sûr de vouloir éteindre ?')) {
          this.appareilService.switchOffAll;
      }
      else {
          return null;
      }
  }

}
