package ai.healthcare.example.healthcare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ai.healthcare.example.healthcare.entity.User;
import ai.healthcare.example.healthcare.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return service.login(user.getEmail(), user.getPassword());
    }
}