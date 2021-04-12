import { Injectable } from '@angular/core';
@Injectable({  
providedIn: 'root'
})

export class AppareilService {

villes = [
    { name: 'Vannes',
      status: 'allume' 
    },
    { name: 'Lorient',
      status: 'eteint' 
  },
];

ngOnInit() {   
}

switchOnAll() {
    for(let ville of this.villes) {
        ville.status = "allume";
        console.log(ville.status)
    }
}

switchOffAll() {
    for(let ville of this.villes) {
        ville.status = "eteint"
    }
}

constructor() {}
}


