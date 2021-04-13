import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({  
providedIn: 'root'
})

export class AppareilService {

    villeSubject = new Subject<any[]>();

    private villes = [
        { 
            id: 0,
            name: 'Vannes',
            status: 'allume',
            specialite: 'Kouign Amann' 
        },
        {
            id:1,
            name: 'Lorient',
            status: 'eteint',
            specialite: 'Base Navale'
        },
        { 
            id:2,
            name: 'Auray',
            status: 'eteint',
            specialite: 'Saint Goustan'
        },
        {
            id:3,
            name: 'Nantes',
            status: 'allume',
            specialite: 'Passage Pommeraye' 
        },
        {
            id:4,
            name: 'Rennes',
            status: 'eteint',
            specialite: 'Parlement de Bretagne' 
        },
        { 
            id:5,
            name: 'Paimpol',
            status: 'allume',
            specialite: 'Coco de Paimpol' 
        },
    ];

emitVilleSubject() {
    this.villeSubject.next(this.villes.slice());
}

getVilleById(id: number) {
    const ville = this.villes.find( (v) => {
        return v.id === id;
    });
    return ville;
}

ngOnInit() {   
}

switchOnAll() {
    for(let ville of this.villes) {
        ville.status = "allume";
    }
    // pour voir la modification en temps réel (pas possible sans car private)
    this.emitVilleSubject();
}


switchOffAll() {
    for(let ville of this.villes) {
        ville.status = "eteint"
    }
    // pour voir la modification en temps réel (pas possible sans car private)
    this.emitVilleSubject();
}


constructor() {}
}


