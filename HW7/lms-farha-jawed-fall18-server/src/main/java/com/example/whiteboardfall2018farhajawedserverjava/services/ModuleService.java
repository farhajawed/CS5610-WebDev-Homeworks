package com.example.whiteboardfall2018farhajawedserverjava.services;

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
import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.CourseRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ModuleRepository;


@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class ModuleService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	ModuleRepository moduleRepository;
	
	@PostMapping("/api/course/{cId}/module")
	public List<Module> createModule(
			@PathVariable("cId") int courseId,
			@RequestBody Module module) {
		Optional<Course> optional = courseRepository.findById(courseId);
		if(optional.isPresent()) {
			Course course = optional.get(); 
			module.setCourse(course);;
			moduleRepository.save(module);
			return course.getModules();
		}
		return null;
	}
	
	@GetMapping("/api/course/{cId}/module")
	public List<Module> findAllModules(
			@PathVariable("cId") int courseId) {
		Optional<Course> optional = courseRepository.findById(courseId);
		if(optional.isPresent()) {
			 Course course = optional.get();
			 return course.getModules();
		}
	    return null;
	}
	
	@GetMapping("/api/module/{mId}")
	public Optional<Module> findModuleById(@PathVariable("mId") int moduleId) {
		return moduleRepository.findById(moduleId);
	}
	
	@PutMapping("/api/module/{mId}")
	public Module updateModule(@PathVariable("mId") int moduleId,
			                   @RequestBody Module moduleNew) {
		Optional<Module> optional = moduleRepository.findById(moduleId);
		if(optional.isPresent()) {
			Module module = optional.get();
			module.setTitle(moduleNew.getTitle());
			return moduleRepository.save(module);
		}
		return null;
	}
	
	@GetMapping("/api/module")
	public List<Module> findModules(){
	    return (List<Module>) moduleRepository.findAll();
	}
	
	@DeleteMapping("/api/module/{mId}")
	public List<Module> deleteModule(@PathVariable("mId") int moduleId) {
		moduleRepository.deleteById(moduleId);
		return (List<Module>) moduleRepository.findAll();
	}
}
