import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';
  fullNameFromChild:string='';
  constructor(private router:Router){

  }
  register(){
    console.log(' from register');

    this.router.navigate(['register']);

  }

  forgotPassword(){
    console.log(' from forgotPassword');

    this.router.navigate(['forgotPassword']);

  }

  login(){
    console.log(' from login')
  }


}
