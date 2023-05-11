import { Component, OnInit } from '@angular/core';
import { template } from 'cypress/types/lodash';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit{

  constructor(){
  }

  todos = 
  [
    // {id : 1, description : 'learn to dance'},
    // {id : 2, description : 'become an angular expert'}
    new Todo(1, 'learn to dance', false, new Date()),
    new Todo(2, 'become an angular expert', true, new Date()),
    new Todo(3, 'visit india', true, new Date()),
    new Todo(4, 'visit us', false, new Date())
  ]

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
