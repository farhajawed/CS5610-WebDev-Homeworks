var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class CourseService {
    
   

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

}