import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  username = 'nikhil'
  password = ''
  errorMessage = 'invalid credentials'
  invalidFlag = false

  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService){

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("LoginComponent::inside init")
  }

  onSubmit(){
    console.log('Onsubmit method called')
    console.log(this.username)

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidFlag = false
    }else{
      this.invalidFlag = true
    }
  }

}
