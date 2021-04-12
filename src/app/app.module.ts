import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PonyracerComponent } from './ponyracer/ponyracer.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { FormsModule} from'@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PonyracerComponent,
    MenuComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
