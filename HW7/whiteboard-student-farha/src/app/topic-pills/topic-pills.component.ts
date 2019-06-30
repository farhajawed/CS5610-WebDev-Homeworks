import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private service: TopicServiceClient) {
    this.activatedRoute.params.subscribe(params =>
      this.setParams(params)
    );
  }
  moduleId;
  courseId;
  lessonId;
  topicId;
  topics = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopics(this.lessonId);
  }

  loadTopics(lessonId) {
    this.lessonId = lessonId;
    console.log("Lesson:"+this.topicId);
    this.service.findTopicsForLesson(lessonId)
      .then(topics => this.topics = topics);
  }


  ngOnInit() {
  }

}
