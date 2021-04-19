import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../service/Appareil.service';
import { VilleModel } from '../models/ville.model';


@Component({
    selector: 'app-new-city',
    templateUrl: './new-city.component.html',
    styleUrls: ['./new-city.component.css']
})

export class NewCityComponent implements OnInit {

    // defaultOnOff='eteint'
    cityForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private appareilService : AppareilService, private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.cityForm = this.formBuilder.group({      
            name: ['', Validators.required],      
            status: ['', Validators.required],      
            specialite: ['', Validators.required]   
        }); 
    }   

    onSubmitForm() {
        const formValue = this.cityForm.value; 
            const newCity = new VilleModel (
                formValue['name'],
                formValue['specialite'],
                formValue['status'],
                // id auto-généré ?
                formValue['id']   
            );
        //this.appareilService.addVille(newCity);
        this.appareilService.addVille;
        this.router.navigate['/listeville'];
        
    }

  /*
  onSubmit(form: NgForm) {  
    const name = form.value['name'];
    const specialite = form.value['specialite'];
    this.appareilService.addVille(name, specialite, status);
    this.router.navigate(['/listeville']);
    console.log(form.value);
}
*/


}
