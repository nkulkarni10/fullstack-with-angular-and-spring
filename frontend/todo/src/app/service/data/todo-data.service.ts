import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    ) { }

  retriveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retriveTodo(username:any, id: any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username:any, id: any, todo: Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  createTodo(username:any, todo: Todo){
    console.log('inside create todo service...')
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo)
  }
}

