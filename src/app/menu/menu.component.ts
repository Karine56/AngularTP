import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = "Pony Racer";
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ecouter l'évènement click du bouton de la navbar
  ngOnClick() : void
  {
    this.isActive = !this.isActive;
  }

}
