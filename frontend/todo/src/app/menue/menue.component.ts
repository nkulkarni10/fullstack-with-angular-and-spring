import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit{
  
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService){
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
