import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  errorMessage = 'An error occured, contact support team..'
}
