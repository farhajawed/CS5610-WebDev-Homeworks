package com.example.whiteboardfall2018farhajawedserverjava.services;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.UserRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class UserService {
	
	@Autowired
	UserRepository userRepository; //jpa crud repo
   
    
	@PostMapping("/api/register")
	public User register(@RequestBody User user,HttpSession session) {
		System.out.println("*****************"+user.getUsername());
		User currentUser = userRepository.save(user);//saves into db
		   session.setAttribute("currentUser", currentUser);
	    return currentUser;
	}
	
	
	@GetMapping("/api/profile")
	public Optional<User> profile(HttpSession session) {
		User currentUser= (User) session.getAttribute("currentUser"); //retrieving the current user
		System.out.println(currentUser);
		//sessioned user can be updated.so instead of returning currentUser, 
		//getting user by id from db and returning it
		return userRepository.findById(currentUser.getId()); 
	}
	
	
	@PostMapping("/api/login")
	public User login(@RequestBody User user,
			          HttpSession session) {
		user = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		session.setAttribute("currentUser", user);
	    return user;
	}
	
	
	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
	
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@GetMapping("/api/user/{id}")
	public Optional<User> findUserById(@PathVariable("id") int userId) {
		return userRepository.findById(userId);
	}	
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int id,@RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(id);
		if(optional.isPresent()) {
			User user = optional.get();
			user.set(newUser);
			return userRepository.save(user);
		}
        return null;
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
	  userRepository.deleteById(id);
	}

}
