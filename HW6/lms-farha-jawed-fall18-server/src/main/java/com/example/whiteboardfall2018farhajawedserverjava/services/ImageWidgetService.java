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

import com.example.whiteboardfall2018farhajawedserverjava.models.ImageWidget;
import com.example.whiteboardfall2018farhajawedserverjava.models.Topic;
import com.example.whiteboardfall2018farhajawedserverjava.models.Widget;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.ImageWidgetRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.TopicRepository;
import com.example.whiteboardfall2018farhajawedserverjava.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = { "*" }, allowCredentials = "true",allowedHeaders = "*")
public class ImageWidgetService {
	

		@Autowired
		TopicRepository topicRepository;
		@Autowired
		ImageWidgetRepository imageWidgetRepository;
		@Autowired
		WidgetRepository widgetRepository;
		
		@PostMapping("/api/topic/{topicId}/widget/image")
		public List<Widget> createWidget(
				@PathVariable("topicId") int topicId,
				@RequestBody ImageWidget imageWidget) {
			imageWidget.setWidgetType("IMAGE");
			Topic topic = topicRepository.findById(topicId).get();
			imageWidget.setTopic(topic);
			imageWidget = imageWidgetRepository.save(imageWidget);
			return topicRepository.findById(topicId).get().getWidgets();
		}
		
		@GetMapping("/api/topic/{topicId}/widget/image")
		public List<Widget> findWidgetsForTopic(
				@PathVariable("topicId") int topicId) {
			return (List<Widget>)
					topicRepository.findById(topicId)
					.get().getWidgets();
		}
		
		@GetMapping("/api/widget/image")
		public List<ImageWidget> findAllWidgets() {
			return (List<ImageWidget>) imageWidgetRepository.findAll();
		}
		
		@GetMapping("/api/widget/{wid}/image")
		public Optional<ImageWidget> findWidgetById(@PathVariable("wid") int widgetId) {
			return imageWidgetRepository.findById(widgetId);
		}
		
		@PutMapping("/api/widget/{wid}/image")
		public ImageWidget updateWidget(@PathVariable("wid") int widgetId,
				                   @RequestBody ImageWidget widgetNew) {
			Widget widget = widgetRepository.findById(widgetId).get();
			widgetNew.setId(widget.getId());
			widgetNew.setTopic(widget.getTopic());
			widgetRepository.delete(widget);
			return imageWidgetRepository.save(widgetNew);
		}
		
		@DeleteMapping("/api/widget/{wid}/image")
		public List<ImageWidget> deleteWidget(@PathVariable("wid") int widgetId) {
			imageWidgetRepository.deleteById(widgetId);
			return (List<ImageWidget>) imageWidgetRepository.findAll();
		}
		
}


