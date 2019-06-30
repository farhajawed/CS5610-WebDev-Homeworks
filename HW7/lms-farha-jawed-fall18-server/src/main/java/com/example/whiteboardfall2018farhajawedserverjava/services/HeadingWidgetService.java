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

import com.example.whiteboardfall2018farhajawedserverjava.models.HeadingWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.HeadingWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class HeadingWidgetService {
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	HeadingWidgetRepository headingWidgetRepository;
	@Autowired
	WidgetRepository widgetRepository;
	
	@PostMapping("/api/topic/{topicId}/widget/heading")
	public List<Widget> createWidget(
			@PathVariable("topicId") int topicId,
			@RequestBody HeadingWidget headingWidget) {
		headingWidget.setWidgetType("HEADING");
		Topic topic = topicRepository.findById(topicId).get();
		headingWidget.setTopic(topic);
		headingWidget = headingWidgetRepository.save(headingWidget);
		return topicRepository.findById(topicId).get().getWidgets();
	}
	
	@GetMapping("/api/topic/{topicId}/widget/heading")
	public List<Widget> findWidgetsForTopic(
			@PathVariable("topicId") int topicId) {
		return (List<Widget>)
				topicRepository.findById(topicId)
				.get().getWidgets();
	}
	
	@GetMapping("/api/widget/heading")
	public List<HeadingWidget> findAllWidgets() {
		return (List<HeadingWidget>) headingWidgetRepository.findAll();
	}
	
	@GetMapping("/api/widget/{wid}/heading")
	public Optional<HeadingWidget> findWidgetById(@PathVariable("wid") int widgetId) {
		return headingWidgetRepository.findById(widgetId);
	}
	
	@PutMapping("/api/widget/{wid}/heading")
	public HeadingWidget updateWidget(@PathVariable("wid") int widgetId,
			                   @RequestBody HeadingWidget widgetNew) {
		Widget widget = widgetRepository.findById(widgetId).get();
		widgetNew.setId(widget.getId());
		widgetNew.setTopic(widget.getTopic());
		widgetRepository.delete(widget);
		return headingWidgetRepository.save(widgetNew);
	}
	
	@DeleteMapping("/api/widget/{wid}/heading")
	public List<HeadingWidget> deleteWidget(@PathVariable("wid") int widgetId) {
		headingWidgetRepository.deleteById(widgetId);
		return (List<HeadingWidget>) headingWidgetRepository.findAll();
	}
}
