import { Injectable } from '@angular/core';

@Injectable()
export class TopicServiceClient {
  TOPIC_URL = 'https://lms-farha-jawed-fall18-server.herokuapp.com/api';

  findAllTopics() {
    return fetch
    (this.TOPIC_URL + '/topic')
      .then(response => response.json());
  }

  findTopicsForLesson(lessonId) {
    return fetch
    (this.TOPIC_URL + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findTopicById(topicId) {
    return fetch
    (this.TOPIC_URL + '/topic/' + topicId)
      .then(response => response.json());
  }


}
