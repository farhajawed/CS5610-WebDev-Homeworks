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

import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.models.Course;
import com.example.whiteboardfall2018farhajawedserverjava.models.Lesson;


@RestController
@CrossOrigin(origins = { "https://lms-farha-session.herokuapp.com" }, allowCredentials = "true",allowedHeaders = "*")
public class LessonService {
	@Autowired
	ModuleService moduleService;
	
	@Autowired
	UserService userService;
	
	List<Lesson> lessons = new ArrayList<>();
	
	@PostMapping("/api/module/{mid}/lesson")
	public List<Lesson> createLesson(
			@PathVariable("mid") int moduleId,
			@RequestBody Lesson lesson) {
		Module module = moduleService.findModuleById(moduleId);
		lessons = module.getLessons();
		lessons.add(lesson);
		return lessons;
	}
	
	@GetMapping("/api/module/{mid}/lesson")
	public List<Lesson> findAllLessons(
			@PathVariable("mid") int moduleId) {
		Module module = moduleService.findModuleById(moduleId);
		return module.getLessons();
	}
	
	@GetMapping("/api/lesson/{lid}")
	public Lesson findLessonById(@PathVariable("lid") int lessonId) {
		List<Module> modules = moduleService.findModules();
		for(Module module: modules) {
			List<Lesson> lessons = module.getLessons();
			for(Lesson lesson: lessons) {
				if(lesson.getId() == lessonId)
					return lesson;
			}
		}
		return null;
	}
	
	@GetMapping("/api/lesson")
	public List<Lesson> findLessons(){
	    return lessons;
	}
	
	@PutMapping("/api/lesson/{lid}")
	public Lesson updateLesson(@PathVariable("lid") int lessonId,
			                   @RequestBody Lesson lesson) {
			for(Lesson ls: lessons) {
				if(ls.getId() == lessonId) {
					ls.setTitle(lesson.getTitle());
					return ls;
				}
			}
		return null;
	}
	
	@DeleteMapping("/api/lesson/{lid}")
	public List<Lesson> deleteLesson(@PathVariable("lid") int lessonId) {
			int i=0;
			for(Lesson ls: lessons) {
				if(ls.getId() == lessonId)
				{
					lessons.remove(i);
					return lessons;
				}
				i++;
			}
		return null;
	}
	
	@GetMapping("/api/user/{userId}/course/{courseId}/module/{moduleId}/lesson")
	public List<Lesson> findLessonsForCourseId(
			@PathVariable("userId") int userId,
			@PathVariable("courseId") int courseId,
			@PathVariable("moduleId") int moduleId) {
		User user = userService.findUserById(userId);
		for(Course course: user.getCourses()) {
			if(course.getId() == courseId) {
				for(Module module: course.getModules()) {
					if(module.getId() == moduleId) {
						return module.getLessons();
					}
				}
			}
		}
		return null;
	}

}

