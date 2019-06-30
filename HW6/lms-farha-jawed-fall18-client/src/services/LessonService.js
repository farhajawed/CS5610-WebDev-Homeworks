var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class LessonService {
    
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

    static findLesson = (moduleId) =>{
        var url = herokuUrl+"api/module/"+moduleId+"/lesson";
        return fetch(url)
            .then(response =>response.json())
    }

    static findLessonById = (lessonId) =>{
        var url = herokuUrl+"api/lesson/"+lessonId;
        return fetch(url)
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

   
}