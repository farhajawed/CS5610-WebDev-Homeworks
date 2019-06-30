package com.example.whiteboardfall2018farhajawedserverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.whiteboardfall2018farhajawedserverjava.models.Course;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.UserRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.CourseRepository;


@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class CourseService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CourseRepository courseRepository;

	
	@PostMapping("/api/user/{userId}/course")
	public List<Course> createCourse(
			@PathVariable("userId") int userId,
			@RequestBody Course course) {
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isPresent()) {
			User user = optional.get(); 
			course.setUser(user);
			courseRepository.save(course);
			return user.getCourses();
		}
		return null;
	}

	
	@GetMapping("/api/user/{userId}/course")
	public List<Course> findAllCourses(@PathVariable("userId") int userId) {
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isPresent()) {
			 User user = optional.get();
			 return user.getCourses();
		}
	    return null;
	}

	@GetMapping("/api/course")
	public List<Course> findCourses() {
	    return (List<Course>) courseRepository.findAll();
	}
	
	
	@GetMapping("/api/course/{courseId}")
	public Optional<Course> findCourseById(@PathVariable("courseId") int courseId) {
		return courseRepository.findById(courseId);
	}
	
	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(
			@PathVariable("courseId") int courseId,
			@RequestBody Course courseNew) {
	
		Optional<Course> optional = courseRepository.findById(courseId);
		if(optional.isPresent()) {
			Course course = optional.get();
			course.setTitle(courseNew.getTitle());
			return courseRepository.save(course);
		}
		return null;	
	}
	

   //user id is redundant*********************************	
	@DeleteMapping("/api/user/{uid}/course/{cid}")
	public List<Course> deleteCourse(@PathVariable("uid") int userId,
			                         @PathVariable("cid") int courseId) {
	   
		 courseRepository.deleteById(courseId);
		 return (List<Course>) courseRepository.findAll();
	 }

}