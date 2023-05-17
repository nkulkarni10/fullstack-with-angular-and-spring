package com.rest.webservices.helloworld.controller;

import com.rest.webservices.helloworld.beans.HelloWordBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class HelloWorldController {


    @GetMapping(path="/hello-world-bean")
    public HelloWordBean getHelloWorldMessage(){
        System.out.println("Hello from controller");
        //return new HelloWordBean("Hello world from Backend ..");
        throw  new RuntimeException("Some error happned at backend..Contact support team.");
    }

    @GetMapping(path="/hello-world-bean/path-variable/{name}")
    public HelloWordBean getHelloWorldMessage(@PathVariable String name){
        System.out.println("Hello from controller");
        return new HelloWordBean(String.format("Hello world from Backend..%s",name));
    }
}
