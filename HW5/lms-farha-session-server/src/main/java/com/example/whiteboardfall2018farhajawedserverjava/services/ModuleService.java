package com.example.whiteboardfall2018farhajawedserverjava.services;

import java.util.ArrayList;
import java.util.List;


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


@RestController
@CrossOrigin(origins = { "https://lms-farha-session.herokuapp.com" }, allowCredentials = "true",allowedHeaders = "*")
public class ModuleService {
	List<Module> modules = new ArrayList<>();
	
	@Autowired
	CourseService courseService;
	
	@PostMapping("/api/course/{cId}/module")
	public List<Module> createModule(
			@PathVariable("cId") int courseId,
			@RequestBody Module module) {
		Course course = courseService.findCourseById(courseId);
		modules = course.getModules();
		modules.add(module);
		return modules;
	}
	
	@GetMapping("/api/course/{cId}/module")
	public List<Module> findAllModules(
			@PathVariable("cId") int courseId) {
		Course course = courseService.findCourseById(courseId);
		return course.getModules();
	}
	
	@GetMapping("/api/module/{mId}")
	public Module findModuleById(@PathVariable("mId") int moduleId) {
			for(Module module: modules) {
				if(module.getId() == moduleId)
					return module;
			}
		return null;
	}
	
	@PutMapping("/api/module/{mId}")
	public Module updateModule(@PathVariable("mId") int moduleId,
			                   @RequestBody Module module) {
		for(Module md: modules) {
			if(md.getId() == moduleId) {
				md.setTitle(module.getTitle());
				return md;
			}
		}
		return null;
	}
	
	@GetMapping("/api/module")
	public List<Module> findModules(){
	    return modules;
	}
	
	@DeleteMapping("/api/module/{mId}")
	public List<Module> deleteModule(@PathVariable("mId") int moduleId) {
			int i=0;
			for(Module md: modules) {
				if(md.getId() == moduleId)
				{
					modules.remove(i);
					return modules;
				}
				i++;
			}
		return null;
	}
}
