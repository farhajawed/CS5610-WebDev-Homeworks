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
import com.example.whiteboardfall2018farhajawedserverjava.models.HeadingWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Lesson;
import com.example.whiteboardfall2018farhajawedserverjava.models.Module;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.User;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.HeadingWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;


@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class WidgetService {
	@Autowired
	UserService userService;
	@Autowired
	WidgetRepository widgetRepository;
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	HeadingWidgetRepository headingWidgetRepository;
	
	@PostMapping("/api/topic/{tid}/widget")
	public List<Widget> createWidget(
			@PathVariable("tid") int topicId,
			@RequestBody Widget widget) {
		Optional<Topic> optional = topicRepository.findById(topicId);
		if(optional.isPresent()) {
			Topic topic = optional.get(); 
			widget.setTopic(topic);
			widgetRepository.save(widget);
			return topic.getWidgets();
		}
		return null;	
	}
	
	
	@GetMapping("/api/topic/{topicId}/widget")
	public List<Widget> findWidgetsForTopic(
			@PathVariable("topicId") int topicId) {
		return (List<Widget>)
				topicRepository.findById(topicId)
				.get().getWidgets();
	}
	
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	
	
	@GetMapping("/api/widget/{wid}")
	public Optional<Widget> findWidgetById(@PathVariable("wid") int widgetId) {
		return widgetRepository.findById(widgetId);
	}
	
	@PutMapping("/api/widget/{wid}")
	public Widget updateWidget(@PathVariable("wid") int widgetId,
			                   @RequestBody Widget widgetNew) {
		Widget widget = widgetRepository.findById(widgetId).get();
		widget.set(widgetNew);
		widgetRepository.save(widget);
		return widget;
	}
	
	@DeleteMapping("/api/topic/{tid}/widget/{wid}")
	public List<Widget> deleteWidget(@PathVariable("tid") int topicId,@PathVariable("wid") int widgetId) {
		widgetRepository.deleteById(widgetId);
		return (List<Widget>)
				topicRepository.findById(topicId)
				.get().getWidgets();
	}
}
