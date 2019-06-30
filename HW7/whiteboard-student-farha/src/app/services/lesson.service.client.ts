import { Injectable } from '@angular/core';

@Injectable()
export class LessonServiceClient {
  LESSON_URL = 'https://lms-farha-jawed-fall18-server.herokuapp.com/api';

  findAllLessons() {
    return fetch
    (this.LESSON_URL + '/lesson')
      .then(response => response.json());
  }

  findLessonsForModule(moduleId) {
    return fetch
    (this.LESSON_URL + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findLessonById(lessonId) {
    return fetch
    (this.LESSON_URL + '/lesson/' + lessonId)
      .then(response => response.json());
  }


}
