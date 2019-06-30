export class WidgetServiceClient {

  WIDGET_URL = 'https://lms-farha-jawed-fall18-server.herokuapp.com/api';

  findAllWidgets() {
    return fetch
    (this.WIDGET_URL + '/widget')
      .then(response => response.json());
  }

  findWidgetById(widgetId) {
    return fetch
    (this.WIDGET_URL + '/widget/' + widgetId)
      .then(response => response.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch(this.WIDGET_URL + '/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
