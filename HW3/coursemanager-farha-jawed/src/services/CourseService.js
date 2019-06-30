import courseList from "./courses.json";

let courses = courseList;

export default class CourseService {
    
    createCourse = course =>
        courses.push(course)

    findAllCourses = () =>
        courses

    findCourseById = (id) =>
        courses.find(course=>course.id === id)
 
    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
    )

    deleteModule = moduleId => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module.id !== moduleId
            )
            return course;
        })
    }


    updateCourse = (id, course) => {
        for (var i = 0; i < courses.length; i++) {
            if(courses[i].id===id){
                courses[i] = course;
                return courses;
            }
        }
    }

    updateModule = (id, title) => {
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
 
}