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
import com.example.whiteboardfall2018farhajawedserverjava.models.Lesson;
import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;

@RestController
@CrossOrigin(origins = { "https://lms-farha-session.herokuapp.com" }, allowCredentials = "true",allowedHeaders = "*")

public class TopicService {
	@Autowired
	UserService userService;
	
	@Autowired
	LessonService lessonService;
	
	List<Topic> topics = new ArrayList<>();
	
	@PostMapping("/api/lesson/{lid}/topic")
	public List<Topic> createTopic(
			@PathVariable("lid") int lessonId,
			@RequestBody Topic topic) {
		Lesson lesson = lessonService.findLessonById(lessonId);
		topics = lesson.getTopics();
		topics.add(topic);
		return topics;
	}
	
	@GetMapping("/api/lesson/{lid}/topic")
	public List<Topic> findAllTopics(
			@PathVariable("lid") int lessonId) {
		Lesson lesson = lessonService.findLessonById(lessonId);
		return lesson.getTopics();
	}
	
	@GetMapping("/api/topic/{tid}")
	public Topic findTopicById(@PathVariable("tid") int topicId) {
		List<Lesson> lessons = lessonService.findLessons();
		for(Lesson lesson: lessons) {
			List<Topic> topics = lesson.getTopics();
			for(Topic topic: topics) {
				if(topic.getId() == topicId)
					return topic;
			}
		}
		return null;
	}
	
	@PutMapping("/api/topic/{tid}")
	public Topic updateTopic(@PathVariable("tid") int topicId,
			                   @RequestBody Topic topic) {
			for(Topic tc: topics) {
				if(tc.getId() == topicId) {
					tc.setTitle(topic.getTitle());
					return tc;
				}			
			}
		return null;
	}
	
	@DeleteMapping("/api/topic/{tid}")
	public List<Topic> deleteTopic(@PathVariable("tid") int topicId) {
			int i=0;
			for(Topic tc: topics) {
				if(tc.getId() == topicId) 
				{
					topics.remove(i);
					return topics;
				}
				i++;
			}
		return null;
	}
	
	@GetMapping("/api/user/{userId}/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic")
	public List<Topic> findTopicsForLessonId(
			@PathVariable("userId") int userId,
			@PathVariable("courseId") int courseId,
			@PathVariable("moduleId") int moduleId,
			@PathVariable("lessonId") int lessonId) {
		User user = userService.findUserById(userId);
		for(Course course: user.getCourses()) {
			if(course.getId() == courseId) {
				for(Module module: course.getModules()) {
					if(module.getId() == moduleId) {
						for(Lesson lesson: module.getLessons()) {
							if(lesson.getId() == lessonId) {
								return lesson.getTopics();
							}
						}
					}
				}
			}
		}
		return null;
	}
  
}

