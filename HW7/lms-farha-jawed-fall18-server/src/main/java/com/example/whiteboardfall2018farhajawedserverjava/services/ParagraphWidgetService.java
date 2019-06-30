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

import com.example.whiteboardfall2018farhajawedserverjava.models.ParagraphWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ParagraphWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class ParagraphWidgetService {
     	@Autowired
		TopicRepository topicRepository;
		@Autowired
		ParagraphWidgetRepository paragraphWidgetRepository;
		@Autowired
		WidgetRepository widgetRepository;
		
		@PostMapping("/api/topic/{topicId}/widget/paragraph")
		public List<Widget> createListWidget(
				@PathVariable("topicId") int topicId,
				@RequestBody ParagraphWidget paragraphWidget) {
			paragraphWidget.setWidgetType("PARAGRAPH");
			Topic topic = topicRepository.findById(topicId).get();
			paragraphWidget.setTopic(topic);
			paragraphWidget = paragraphWidgetRepository.save(paragraphWidget);
			return topicRepository.findById(topicId).get().getWidgets();
		}
		
		@GetMapping("/api/topic/{topicId}/widget/paragraph")
		public List<Widget> findWidgetsForTopic(
				@PathVariable("topicId") int topicId) {
			return (List<Widget>)
					topicRepository.findById(topicId)
					.get().getWidgets();
		}
		
		@GetMapping("/api/widget/paragraph")
		public List<ParagraphWidget> findAllWidgets() {
			return (List<ParagraphWidget>) paragraphWidgetRepository.findAll();
		}
		
		@GetMapping("/api/widget/{wid}/paragraph")
		public Optional<ParagraphWidget> findWidgetById(@PathVariable("wid") int widgetId) {
			return paragraphWidgetRepository.findById(widgetId);
		}
		
		@PutMapping("/api/widget/{wid}/paragraph")
		public ParagraphWidget updateWidget(@PathVariable("wid") int widgetId,
				                   @RequestBody ParagraphWidget widgetNew) {
			Widget widget = widgetRepository.findById(widgetId).get();
			widgetNew.setId(widget.getId());
			widgetNew.setTopic(widget.getTopic());
			widgetRepository.delete(widget);
			return paragraphWidgetRepository.save(widgetNew);
		}
		
		@DeleteMapping("/api/widget/{wid}/paragraph")
		public List<ParagraphWidget> deleteWidget(@PathVariable("wid") int widgetId) {
			paragraphWidgetRepository.deleteById(widgetId);
			return (List<ParagraphWidget>) paragraphWidgetRepository.findAll();
		}
	}

