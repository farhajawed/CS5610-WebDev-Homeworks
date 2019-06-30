package com.example.whiteboardfall2018farhajawedserverjava.services;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;

@RestController
@CrossOrigin(origins = { "https://lms-farha-session.herokuapp.com" }, allowCredentials = "true",allowedHeaders = "*")
public class UserService {
	
	static List<User> users = new ArrayList<User>();
   
    
	@PostMapping("/api/register")
	public User register(
			@RequestBody User user,HttpSession session) {
		System.out.println(user.getUsername());
		for (User usr : users) {
			 if( user.getUsername().equals(usr.getUsername())){
				 return null;
			 }
		}
		session.setAttribute("currentUser", user);	
		users.add(user);
		return user;
	}
	
	
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
			User currentUser = (User)session.getAttribute("currentUser");	
			return currentUser;
	}
	
	
	@PostMapping("/api/login")
	public User login(@RequestBody User credentials,
			          HttpSession session) {
	 for (User user : users) {
	  if( user.getUsername().equals(credentials.getUsername())
	   && user.getPassword().equals(credentials.getPassword())) {
	    session.setAttribute("currentUser", user);
	    return user;
	  }
	 }
	 return null;
	}
	
	
	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
	
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return users;
	}

	@GetMapping("/api/user/{id}")
	public User findUserById(@PathVariable("id") int userId) {
		for(User user: users) {
			if(user.getId() == userId)
				return user;
		}
		return null;
	}	
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(
			@PathVariable("userId") int userId,
			@RequestBody User user) {
	
		for(User usr: users) {
			if(usr.getId() == userId) {
				usr.setFirstName(user.getFirstName());
				usr.setLastName(user.getLastName());
				usr.setEmail(user.getEmail());
				usr.setPassword(user.getPassword());
				usr.setPhoneNumber(user.getPhoneNumber());
				return usr;
			}
		}	
		return null;
	}
}
