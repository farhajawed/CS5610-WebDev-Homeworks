var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class ModuleService {
    
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

   
}