package com.rest.webservices.controller;

import com.rest.webservices.beans.HelloWordBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class HelloWorldController {


    @GetMapping(path="/hello-world-bean")
    public HelloWordBean getHelloWorldMessage(){
        System.out.println("Hello from controller");
        return new HelloWordBean("Hello world from Backend ..");
    }
}
