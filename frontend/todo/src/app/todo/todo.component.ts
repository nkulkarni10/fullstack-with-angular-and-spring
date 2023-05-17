import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  
  id!: number;
  todo!: Todo;

  constructor(
    
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if(this.id!=-1){
      this.todoService.retriveTodo('nikhil', this.id).subscribe(
        data => this.todo = data
       )
    }    
  }

  saveTodo(){
    console.log('inside saveTodo..'+this.id)
    if(this.id == -1){
       console.log('save todo..')
       this.todoService.createTodo('nikhil', this.todo)
       .subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['todos'])
        }
       )
    }else{
      console.log('update todo..')
      this.todoService.updateTodo('nikhil', this.id, this.todo)
      .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
     )
    }    
  }
}
