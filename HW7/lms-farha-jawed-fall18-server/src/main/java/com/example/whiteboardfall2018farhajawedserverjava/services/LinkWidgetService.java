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
import com.example.whiteboardfall2018farhajawedserverjava.models.LinkWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.LinkWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.HeadingWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.LinkWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ListWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class LinkWidgetService {
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	LinkWidgetRepository linkWidgetRepository;
	@Autowired
	WidgetRepository widgetRepository;
	@Autowired
	HeadingWidgetRepository headingWidgetRepository;
	
	@PostMapping("/api/topic/{topicId}/widget/link")
	public List<Widget> createWidget(
			@PathVariable("topicId") int topicId,
			@RequestBody LinkWidget linkWidget) {
		linkWidget.setWidgetType("LIST");
		Topic topic = topicRepository.findById(topicId).get();
		linkWidget.setTopic(topic);
		linkWidget = linkWidgetRepository.save(linkWidget);
		return topicRepository.findById(topicId).get().getWidgets();
	}
	
	@GetMapping("/api/topic/{topicId}/widget/link")
	public List<Widget> findWidgetsForTopic(
			@PathVariable("topicId") int topicId) {
		return (List<Widget>)
				topicRepository.findById(topicId)
				.get().getWidgets();
	}
	
	@GetMapping("/api/widget/link")
	public List<LinkWidget> findAllWidgets() {
		return (List<LinkWidget>) linkWidgetRepository.findAll();
	}
	
	@GetMapping("/api/widget/{wid}/link")
	public Optional<LinkWidget> findWidgetById(@PathVariable("wid") int widgetId) {
		return linkWidgetRepository.findById(widgetId);
	}
	
	@PutMapping("/api/widget/{wid}/link")
	public LinkWidget updateWidget(@PathVariable("wid") int widgetId,
			                   @RequestBody LinkWidget widgetNew) {
		Widget widget = widgetRepository.findById(widgetId).get();
		widgetNew.setId(widget.getId());
		widgetNew.setTopic(widget.getTopic());
		widgetRepository.delete(widget);
		return linkWidgetRepository.save(widgetNew);
	}
	
	@DeleteMapping("/api/widget/{wid}/link")
	public List<LinkWidget> deleteWidget(@PathVariable("wid") int widgetId) {
		linkWidgetRepository.deleteById(widgetId);
		return (List<LinkWidget>) linkWidgetRepository.findAll();
	}
}
