import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from'@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { AppareilService} from './service/Appareil.service';
import { AuthComponent } from './auth/auth.component';
import { SingleraceComponent } from './singlerace/singlerace.component';
import { AuthService } from './auth.service'

// import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [  
    { path: 'auth', component: AuthComponent },
    { path: 'listeville', component: RacesComponent },
    { path: 'listeville/:id',  component: SingleraceComponent }
    //{ path: 'listeville', canActivate: [AuthGuard], component: RacesComponent },
    //{ path: 'singlerace/:id', canActivate: [AuthGuard], component: SingleraceComponent },
    
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    AuthComponent,
    SingleraceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
