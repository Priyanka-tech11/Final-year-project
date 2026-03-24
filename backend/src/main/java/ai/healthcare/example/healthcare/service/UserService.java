package ai.healthcare.example.healthcare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ai.healthcare.example.healthcare.entity.User;
import ai.healthcare.example.healthcare.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public String register(User user) {
        // check if email already exists
        if(repo.findByEmail(user.getEmail()).isPresent()){
            return "Email already registered!";
        }

        repo.save(user); // saves email + password in database
        return "Signup successful!";
    }

    public String login(String email, String password){
        User user = repo.findByEmail(email).orElse(null);

        if(user == null) return "User not found!";
        if(!user.getPassword().equals(password)) return "Incorrect password!";

        return "Login successful!";
    }
}