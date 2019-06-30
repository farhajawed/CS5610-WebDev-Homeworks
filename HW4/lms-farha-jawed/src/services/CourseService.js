import courseList from "./courses.json";

let courses = courseList;

export default class CourseService {
    
    static createCourse = course =>
        courses.push(course)

    static findAllCourses = () =>
        courses

    static findCourseById = (id) =>
        courses.find(course=>course.id === id)
 
    static deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
    )

    static deleteModule = moduleId => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module.id !== moduleId
            )
            return course;
        })
    }


    static updateCourse = (id, course) => {
        for (var i = 0; i < courses.length; i++) {
            if(courses[i].id===id){
                courses[i] = course;
                return courses;
            }
        }
    }

    static updateModule = (id, title) => {
        for (var i = 0; i < courses.length; i++) {
           var course = courses[i];
           for(var j = 0; j < course.modules.length; j++){
               var module = course.modules[j];
               if(module.id === id){
                  module.title = title;
                  return courses;
               }
           }
        }
    }
   
    static createWidget = (topicId,widget) =>{
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            var widgets = courses[c].modules[m].lessons[l].topics[t].widgets;
                             widgets.push(widget);
                        }
                    }
                }
            }
        } 
    }

    static findWidgets = topicId => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }

  
    static findWidget = widgetId => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let k in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if(courses[c].modules[m].lessons[l].topics[t].widgets[k].id === widgetId) {
                                return courses[c].modules[m].lessons[l].topics[t].widgets[k]
                            }
                        }
                    }
                }
            }
        }
    }

    // findAllWidgets is all the widgets around all the topics.
    static findAllWidgets = () => {
        let allWidgets = [];
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let k in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            let widget = courses[c].modules[m].lessons[l].topics[t].widgets[k];
                            allWidgets.push(widget);
                        }
                    }
                }
            }
        }
        return allWidgets;
    }


  static updateWidget = (widgetId, widget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let k in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if(courses[c].modules[m].lessons[l].topics[t].widgets[k].id === widgetId) {
                                const widgetIndex = k;
                                courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = widget;
                            }
                        }
                    }
                }
            }
        }
    }

    static deleteWidget = widgetId => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let k in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if(courses[c].modules[m].lessons[l].topics[t].widgets[k].id === widgetId) {
                               const widgetIndex = k;
                               courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1);
                            }
                        }
                    }
                }
            }
        }
    }

    static saveWidgetList = (widgets, topicId) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                            if(courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                                courses[c].modules[m].lessons[l].topics[t].widgets = widgets;
                                console.log(courses[c].modules[m].lessons[l].topics[t].widgets);
                            }
                        }
                   }
               }
           }
           
    }

}