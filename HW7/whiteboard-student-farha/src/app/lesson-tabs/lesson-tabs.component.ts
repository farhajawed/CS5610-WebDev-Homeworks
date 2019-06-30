import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private service: LessonServiceClient) {
    this.activatedRoute.params.subscribe(params =>
      this.setParams(params)
    );
  }
  moduleId;
  courseId;
  lessonId;
  lessons = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.moduleId);
  }

  loadLessons(moduleId) {
    this.moduleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}
