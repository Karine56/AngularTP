import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../service/Appareil.service';

@Component({
  selector: 'app-edit-caracteristique',
  templateUrl: './edit-caracteristique.component.html',
  styleUrls: ['./edit-caracteristique.component.css']
})
export class EditCaracteristiqueComponent implements OnInit {

  defaultOnOff='eteint'
  constructor(private appareilService : AppareilService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {  
    const name = form.value['name'];
    const specialite = form.value['specialite'];
    this.appareilService.addVille(name, specialite, status);
    this.router.navigate(['/listeville']);
    console.log(form.value);
}


}
