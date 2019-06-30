import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  MODULE_URL = 'https://lms-farha-jawed-fall18-server.herokuapp.com/api';

  findAllModules() {
    return fetch
    (this.MODULE_URL + '/module')
      .then(response => response.json());
  }

  findModulesForCourses(courseId) {
    return fetch
    (this.MODULE_URL + '/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findModuleById(moduleId) {
    return fetch
    (this.MODULE_URL + '/module/' + moduleId)
      .then(response => response.json());
  }



}
