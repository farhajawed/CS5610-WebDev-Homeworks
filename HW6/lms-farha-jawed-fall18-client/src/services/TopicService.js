var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class TopicService {
    
    static findTopic = (lessonId) =>{
        var url = herokuUrl+"api/lesson/"+lessonId+"/topic";
        return fetch(url)
            .then(response =>response.json())
    }

    static findTopicById = (topicId) =>{
        var url = herokuUrl+"api/topic/"+topicId;
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

}