import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>
      this.loadCourse(params['courseId'])
    );
  }
  course = {
    title:""
  }
  loadCourse(courseId) {
      console.log(courseId);
      this.service.findCourseById(courseId)
         .then(course => this.course = course);
  }

  ngOnInit() {
  }

}
