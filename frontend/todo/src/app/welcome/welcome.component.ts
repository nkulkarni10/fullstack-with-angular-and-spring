import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message = 'Some welcome message'
  name = ''
  welcomeMessageFromService: String | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService){

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log("Get Welcome message")
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(response=> this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
    //console.log(response)
    //console.log(response.message)
  }
}
