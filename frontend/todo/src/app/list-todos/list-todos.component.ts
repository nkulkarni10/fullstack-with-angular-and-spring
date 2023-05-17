import { Component, OnInit } from '@angular/core';
import { template } from 'cypress/types/lodash';
import { Inject } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit{

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ){
  }

  todos : Todo[] | undefined
  message: String | undefined
  
  // [
  //   // {id : 1, description : 'learn to dance'},
  //   // {id : 2, description : 'become an angular expert'}
  //   new Todo(1, 'learn to dance', false, new Date()),
  //   new Todo(2, 'become an angular expert', true, new Date()),
  //   new Todo(3, 'visit india', true, new Date()),
  //   new Todo(4, 'visit us', false, new Date())
  // ]
  
  // [
  //   // {id : 1, description : 'learn to dance'},
  //   // {id : 2, description : 'become an angular expert'}
  //   new Todo(1, 'learn to dance', false, new Date()),
  //   new Todo(2, 'become an angular expert', true, new Date()),
  //   new Todo(3, 'visit india', true, new Date()),
  //   new Todo(4, 'visit us', false, new Date())
  // ]

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.refreshTods();
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('nikhil', id).subscribe(
      response => {
        this.message = `todod ${id} is deleted successfully...`;
        this.refreshTods();
      }
    )
  }

  updateTodo(id: any){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo(){
    console.log("add todo...")
    this.router.navigate(['todos', -1])
  }

  refreshTods(){
    this.todoService.retriveAllTodos('nikhil').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )  
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