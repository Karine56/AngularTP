import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { VilleModel} from '../models/ville.model';
import { AppareilService } from '../service/Appareil.service';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

    villes: any[];
    villeSubscription: Subscription;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
      // va chercher les valeurs via définies dans le service
    //this.villes = this.appareilService.villes;
    this.villeSubscription = this.appareilService.villeSubject.subscribe(
      (villes: any[]) => {
          this.villes = villes;
      }
    );
    this.appareilService.emitVilleSubject();
  }

  onAllumer() {
    if(confirm('Etes vous sûr de vouloir tout allumer ?')) {
        this.appareilService.switchOnAll();
        console.log(this.appareilService.villeSubject)
    }
    else {
        return null;
    }
  }

  onEteindre() {
      if(confirm('Etes vous sûr de vouloir tout éteindre ?')) {
          this.appareilService.switchOffAll();
      }
      else {
          return null;
      }
  }

  onSwitch(index) {
    if (this.villes[index].status =='allume') {
      this.villes[index].status = 'eteint'
    }
    else {
      this.villes[index].status = 'allume'
    }
  }

}
