import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;  
  
  constructor(private authService: AuthService, private router: Router) { }  
  ngOnInit() {    
    this.authStatus = this.authService.isAuth;  
  }  
  onSignIn() {    
    this.authService.signIn().then(     
     () => {        
        //console.log('authentification OK !');       
        this.authStatus = this.authService.isAuth;		
        this.router.navigate(['listeville']);
      }    
  );  
  }  
  onSignOut() {    
    this.authService.signOut();    
    this.authStatus = this.authService.isAuth; 
   }
  

}
