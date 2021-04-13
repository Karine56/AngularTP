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
    { name: 'Auray',
      status: 'eteint' 
    },
    { name: 'Nantes',
      status: 'allume' 
    },
    { name: 'Rennes',
      status: 'eteint' 
    },
    { name: 'Paimpol',
      status: 'allume' 
    },
];

ngOnInit() {   
}

switchOnAll() {
    for(let ville of this.villes) {
        ville.status = "allume";
    }
}


switchOffAll() {
    for(let ville of this.villes) {
        ville.status = "eteint"
    }
}


constructor() {}
}


