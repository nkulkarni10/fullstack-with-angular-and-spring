import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{ title }}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log('We are in app module...entry point')
  }
  title = 'todo';
  message = 'Hello, Wel-Come to Angular';
}