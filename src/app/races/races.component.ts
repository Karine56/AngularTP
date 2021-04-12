import { Component, Input, OnInit } from '@angular/core';
import { VilleModel} from '../models/ville.model';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  // initialise les valeurs
  // le @Input() indique qu'elle pourra être modifiée/initialisée
    //@Input()ville1:string = 'Vannes';
    //@Input()ville2:string = 'Lorient';
    //@Input()ville3:string = 'Auray';
    //@Input()ville4:string = 'Nantes';

    villes: Array<VilleModel> = [];


  constructor() { }

  ngOnInit(): void {
    this.villes = [{ name: 'Vannes'}, { name: 'Lorient'}, { name: 'Auray'}, {name: 'Nantes'}]
  }

}
