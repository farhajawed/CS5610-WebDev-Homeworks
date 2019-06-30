var herokuUrl="https://lms-farha-session-server.herokuapp.com/";

export default class CourseService {
    
    static registerUser = user =>{
        var url = herokuUrl+"api/register";
        return fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }

    static login = user =>{
        var url = herokuUrl+"api/login";
        return fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }

    static updateUser = (user,userId) =>{
        var url = herokuUrl+"api/user/"+userId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
    }

    static createCourse = (userId,course) =>{
        var url = herokuUrl+"api/user/"+userId+"/course";
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static deleteCourse = (userId,courseId) =>{
        var url = herokuUrl+"api/user/"+userId+"/course/"+courseId;
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }

    static updateCourse = (courseId,course) =>{
        var url = herokuUrl+"api/course/"+courseId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(course),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response =>response.json())
    }
        
    static findUserInSession =() => {
        var url = herokuUrl+"api/profile";
        return fetch(url,{
            credentials: 'include'
        }).then(response =>response.json())
    }
    
    static findAllCourses = (userId) => {
            var url = herokuUrl+"api/user/"+userId+"/course";
            return fetch(url,{
                credentials: 'include'
            })
              .then(response =>response.json())
    }


    static findCourseById = (id) =>{
        var url = herokuUrl+"api/course/"+id;
        return fetch(url)
            .then(response =>response.json())
    }

    static findModule = (courseId) =>{
        var url = herokuUrl+"api/course/"+courseId+"/module";
        return fetch(url)
            .then(response =>response.json())
    }

    static findModuleByMid = (moduleId) =>{
        var url = herokuUrl+"api/module/"+moduleId;
        return fetch(url)
            .then(response =>response.json())
    }
 
    static createModule = (courseId,module) =>{
        var url = herokuUrl+"api/course/"+courseId+"/module";
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static updateModule = (moduleId,module) =>{
        var url = herokuUrl+"api/module/"+moduleId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(module),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response =>response.json())
    }

    static deleteModule = (moduleId) =>{
        var url = herokuUrl+"api/module/"+moduleId;
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }

    static findLesson = (moduleId) =>{
        var url = herokuUrl+"api/module/"+moduleId+"/lesson";
        return fetch(url)
            .then(response =>response.json())
    }
 
    static createLesson = (moduleId,lesson) =>{
        var url = herokuUrl+"api/module/"+moduleId+"/lesson";
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static updateLesson = (lessonId,lesson) =>{
        var url = herokuUrl+"api/lesson/"+lessonId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(lesson),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response =>response.json())
    }

    static deleteLesson = (lessonId) =>{
        var url = herokuUrl+"api/lesson/"+lessonId;
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }

    static findTopic = (lessonId) =>{
        var url = herokuUrl+"api/lesson/"+lessonId+"/topic";
        return fetch(url)
            .then(response =>response.json())
    }
 
    static createTopic = (lessonId,topic) =>{
        var url = herokuUrl+"api/lesson/"+lessonId+"/topic";
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(topic),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static updateTopic = (topicId,topic) =>{
        var url = herokuUrl+"api/topic/"+topicId;
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(topic),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response =>response.json())
    }

    static deleteTopic = (topicId) =>{
        var url = herokuUrl+"api/topic/"+topicId;
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }


    static logout = () =>{
        var url = herokuUrl+"api/logout";
        return fetch(url,{
            method: 'POST',
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }
}