import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { AppareilService} from './service/Appareil.service';
import { AuthComponent } from './auth/auth.component';
import { SingleraceComponent } from './singlerace/singlerace.component';
import { AuthService } from './auth.service'
import { AuthGuard } from './auth-guard.service';
import { NewCityComponent } from './new-city/new-city.component';

const appRoutes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'listeville', canActivate: [AuthGuard], component: RacesComponent },
    { path: 'listeville/:id', canActivate: [AuthGuard], component: SingleraceComponent },
    { path: 'new', canActivate: [AuthGuard], component: NewCityComponent },

    
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    AuthComponent,
    SingleraceComponent,
    NewCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
