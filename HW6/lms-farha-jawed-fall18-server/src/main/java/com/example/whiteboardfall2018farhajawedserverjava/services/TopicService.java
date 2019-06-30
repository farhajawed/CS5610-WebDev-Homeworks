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
import com.example.whiteboardfall2018farhajawedserverjava.models.Lesson;
import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.LessonRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ModuleRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")

public class TopicService {
	
	@Autowired
	LessonRepository lessonRepository;
	
	@Autowired
	TopicRepository topicRepository;
	
	@PostMapping("/api/lesson/{lid}/topic")
	public List<Topic> createTopic(
			@PathVariable("lid") int lessonId,
			@RequestBody Topic topic) {
		Optional<Lesson> optional = lessonRepository.findById(lessonId);
		if(optional.isPresent()) {
			Lesson lesson = optional.get(); 
			topic.setLesson(lesson);
			topicRepository.save(topic);
			return lesson.getTopics();
		}
		return null;	
	}
	
	@GetMapping("/api/lesson/{lid}/topic")
	public List<Topic> findAllTopics(
			@PathVariable("lid") int lessonId) {
		Optional<Lesson> optional = lessonRepository.findById(lessonId);
		if(optional.isPresent()) {
			 Lesson lesson = optional.get();
			 return lesson.getTopics();
		}
	    return null;
	}
	
	@GetMapping("/api/topic/{tid}")
	public Optional<Topic> findTopicById(@PathVariable("tid") int topicId) {
		return topicRepository.findById(topicId);
	}
	
	@PutMapping("/api/topic/{tid}")
	public Topic updateTopic(@PathVariable("tid") int topicId,
			                   @RequestBody Topic topicNew) {
		Optional<Topic> optional = topicRepository.findById(topicId);
		if(optional.isPresent()) {
			Topic topic = optional.get();
			topic.setTitle(topicNew.getTitle());
			topicRepository.save(topic);
			return topic;
		}
		return null;
	}
	
	@DeleteMapping("/api/topic/{tid}")
	public List<Topic> deleteTopic(@PathVariable("tid") int topicId) {
		topicRepository.deleteById(topicId);
		return (List<Topic>) topicRepository.findAll();
	}
	
	@GetMapping("/api/user/{userId}/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic")
	public List<Topic> findTopicsForLessonId(
			@PathVariable("userId") int userId,
			@PathVariable("courseId") int courseId,
			@PathVariable("moduleId") int moduleId,
			@PathVariable("lessonId") int lessonId) {
		Optional<Lesson> optional = lessonRepository.findById(lessonId);
		if(optional.isPresent()) {
			 Lesson lesson = optional.get();
			 return lesson.getTopics();
		}
	    return null;
	}
  
}

