package com.rest.webservices.todo.controller;

import com.rest.webservices.todo.beans.Todo;
import com.rest.webservices.todo.service.TodoHardCodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoService;

    @GetMapping(path="/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) throws ParseException {
        return todoService.findAll();
    }

    @GetMapping(path="/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) throws ParseException {
        return todoService.getTodo(id);
    }

    @PutMapping(path="/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) throws ParseException {
        Todo updatedTodo = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path="/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) throws ParseException {
        Todo createdTodo = todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if(todo!=null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
