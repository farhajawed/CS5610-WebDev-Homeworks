package com.example.whiteboardfall2018farhajawedserverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

@RestController
@CrossOrigin(origins = { "https://lms-farha-session.herokuapp.com" }, allowCredentials = "true",allowedHeaders = "*")
public class CourseService {

	@Autowired
	UserService userService;

	List<Course> courses = new ArrayList<>();
	
	@PostMapping("/api/user/{userId}/course")
	public List<Course> createCourse(
			@PathVariable("userId") int userId,
			@RequestBody Course course) {
		User user = userService.findUserById(userId);
		courses = user.getCourses();
		courses.add(course);
		return courses;
	}

	
	@GetMapping("/api/user/{userId}/course")
	public List<Course> findAllCourses(@PathVariable("userId") int userId) {
		User user = userService.findUserById(userId);
	    return user.getCourses();
	}

	@GetMapping("/api/course")
	public List<Course> findCourses() {
	    return courses;
	}
	
	
	@GetMapping("/api/course/{courseId}")
	public Course findCourseById(@PathVariable("courseId") int courseId) {
		List<User> users = userService.findAllUsers();
		for(User user: users) {
			List<Course> courses = user.getCourses();
			for(Course course: courses) {
				if(course.getId() == courseId)
					return course;
			}
		}
		return null;
	}
	
	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(
			@PathVariable("courseId") int courseId,
			@RequestBody Course course) {
	
		for(Course crs: courses) {
			if(crs.getId() == courseId) {
				crs.setTitle(course.getTitle());
				return crs;
			}
		}	
		return null;
	}
	

	
	@DeleteMapping("/api/user/{uid}/course/{cid}")
	public List<Course> deleteCourse(@PathVariable("uid") int userId,
			                                @PathVariable("cid") int courseId) {
	   
	   User user = userService.findUserById(userId);
	   List<Course> userCourses = user.getCourses();
	   
	   userCourses = userCourses.stream()
	    .filter(course -> course.getId() != courseId)
	    .collect(Collectors.toList());
	   user.setCourses(userCourses);
	   courses = userCourses;
	   return userCourses;
	 }

}