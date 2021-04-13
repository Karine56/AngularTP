import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/Appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlerace',
  templateUrl: './singlerace.component.html',
  styleUrls: ['./singlerace.component.css']
})

export class SingleraceComponent implements OnInit {

  name: string = "Machin";
  specialite: string = "Truc";


  constructor(private appareilService: AppareilService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    // le + devant id permet de caster l'id comme étant un nombre et non pas une string
    this.name = this.appareilService.getVilleById(+id).name;
    console.log("name" + this.name);
    this.specialite = this.appareilService.getVilleById(+id).specialite;
  }

}
