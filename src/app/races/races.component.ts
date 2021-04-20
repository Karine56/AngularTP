import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { VilleModel} from '../models/ville.model';
import { AppareilService } from '../service/Appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit, OnDestroy {

    villes: VilleModel[];
    villeSubscription: Subscription;

  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit() {
    this.villeSubscription = this.appareilService.getVille()
    //this.villeSubscription = this.appareilService.getVillesFromServer()
    .subscribe(
        // this.appareilService.emitVilleSubject();
        (villes: VilleModel[]) => {
            this.villes = villes;
        })
    }
    //);
    //this.appareilService.emitVilleSubject();
  

    ngOnDestroy() {
        this.villeSubscription.unsubscribe();
    }

    onAllumer() {
        if(confirm('Etes vous sûr de vouloir tout allumer ?')) {
            this.appareilService.switchOnAll();
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
        let ville = this.villes[index]
        console.log("ville : " + ville);
        ville.status = ville.status === 'allume' ? 'eteint' : 'allume'       
    }


    onSave() {
      this.appareilService.saveVillesToServer();
      this.router.navigate['/listeville'];
    }

}
