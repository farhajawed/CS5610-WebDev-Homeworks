import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
  COURSE_URL = 'https://lms-farha-jawed-fall18-server.herokuapp.com/api/course';

  findAllCourses() {
    return fetch
    (this.COURSE_URL)
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch
    (this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }

}
