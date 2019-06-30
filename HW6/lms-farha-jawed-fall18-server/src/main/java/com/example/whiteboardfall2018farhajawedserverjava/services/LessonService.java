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

import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.CourseRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.LessonRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ModuleRepository;
import com.example.whiteboardfall2018farhajawedserverjava.models.Course;
import com.example.whiteboardfall2018farhajawedserverjava.models.Lesson;


@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class LessonService {
	
	@Autowired
	LessonRepository lessonRepository;
	
	@Autowired
	ModuleRepository moduleRepository;
	
	@PostMapping("/api/module/{mid}/lesson")
	public List<Lesson> createLesson(
			@PathVariable("mid") int moduleId,
			@RequestBody Lesson lesson) {
		Optional<Module> optional = moduleRepository.findById(moduleId);
		if(optional.isPresent()) {
			Module module = optional.get(); 
			lesson.setModule(module);
			lessonRepository.save(lesson);
			return module.getLessons();
		}
		return null;
	}
	
	@GetMapping("/api/module/{mid}/lesson")
	public List<Lesson> findAllLessons(
			@PathVariable("mid") int moduleId) {
		Optional<Module> optional = moduleRepository.findById(moduleId);
		if(optional.isPresent()) {
			 Module module = optional.get();
			 return module.getLessons();
		}
	    return null;
	}
	
	@GetMapping("/api/lesson/{lid}")
	public Optional<Lesson> findLessonById(@PathVariable("lid") int lessonId) {
		return lessonRepository.findById(lessonId);
	}
	
	@GetMapping("/api/lesson")
	public List<Lesson> findLessons(){
		return (List<Lesson>) lessonRepository.findAll();
	}
	
	@PutMapping("/api/lesson/{lid}")
	public Lesson updateLesson(@PathVariable("lid") int lessonId,
			                   @RequestBody Lesson lessonNew) {
		Optional<Lesson> optional = lessonRepository.findById(lessonId);
		if(optional.isPresent()) {
			Lesson lesson = optional.get();
			lesson.setTitle(lessonNew.getTitle());
			lessonRepository.save(lesson);
			return lesson;
		}
		return null;
	}
	
	@DeleteMapping("/api/lesson/{lid}")
	public List<Lesson> deleteLesson(@PathVariable("lid") int lessonId) {
		lessonRepository.deleteById(lessonId);
		return (List<Lesson>) lessonRepository.findAll();
	}
	
	/**
	 * Redundant params
	 * @param userId
	 * @param courseId
	 * @param moduleId
	 * @return
	 */
	@GetMapping("/api/user/{userId}/course/{courseId}/module/{moduleId}/lesson")
	public List<Lesson> findLessonsForCourseId(
			@PathVariable("userId") int userId,
			@PathVariable("courseId") int courseId,
			@PathVariable("moduleId") int moduleId) {
		Optional<Module> optional = moduleRepository.findById(moduleId);
		if(optional.isPresent()) {
			 Module module = optional.get();
			 return module.getLessons();
		}
	    return null;
	}

}

