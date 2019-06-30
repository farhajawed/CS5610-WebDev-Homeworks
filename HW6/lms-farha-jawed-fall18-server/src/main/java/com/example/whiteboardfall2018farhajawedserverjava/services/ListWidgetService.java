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

import com.example.whiteboardfall2018farhajawedserverjava.models.ListWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ListWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class ListWidgetService {
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	ListWidgetRepository listWidgetRepository;
	@Autowired
	WidgetRepository widgetRepository;
	
	@PostMapping("/api/topic/{topicId}/widget/list")
	public List<Widget> createListWidget(
			@PathVariable("topicId") int topicId,
			@RequestBody ListWidget listWidget) {
		listWidget.setWidgetType("LIST");
		Topic topic = topicRepository.findById(topicId).get();
		listWidget.setTopic(topic);
		listWidget = listWidgetRepository.save(listWidget);
		return topicRepository.findById(topicId).get().getWidgets();
	}
	
	@GetMapping("/api/topic/{topicId}/widget/list")
	public List<Widget> findWidgetsForTopic(
			@PathVariable("topicId") int topicId) {
		return (List<Widget>)
				topicRepository.findById(topicId)
				.get().getWidgets();
	}
	
	@GetMapping("/api/widget/list")
	public List<ListWidget> findAllWidgets() {
		return (List<ListWidget>) listWidgetRepository.findAll();
	}
	
	@GetMapping("/api/widget/{wid}/list")
	public Optional<ListWidget> findWidgetById(@PathVariable("wid") int widgetId) {
		return listWidgetRepository.findById(widgetId);
	}
	
	@PutMapping("/api/widget/{wid}/list")
	public ListWidget updateWidget(@PathVariable("wid") int widgetId,
			                   @RequestBody ListWidget widgetNew) {
		Widget widget = widgetRepository.findById(widgetId).get();
		widgetNew.setId(widget.getId());
		widgetNew.setTopic(widget.getTopic());
		widgetRepository.delete(widget);
		return listWidgetRepository.save(widgetNew);
	}
	
	@DeleteMapping("/api/widget/{wid}/list")
	public List<ListWidget> deleteWidget(@PathVariable("wid") int widgetId) {
		listWidgetRepository.deleteById(widgetId);
		return (List<ListWidget>) listWidgetRepository.findAll();
	}
}
