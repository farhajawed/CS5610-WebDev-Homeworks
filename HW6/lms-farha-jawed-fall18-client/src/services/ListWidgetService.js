var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class ListWidgetService {
    
    static createWidget = (topicId,widget) =>{
        var url = herokuUrl+"api/topic/"+topicId+"/widget/list";
        console.log(url);
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static findWidgets = (topicId) =>{
        var url = herokuUrl+"api/topic/"+topicId+"/widget/list";
        return fetch(url)
            .then(response =>response.json()
        )
    }

    static findWidgetById = (widgetId) =>{
        var url = herokuUrl+"api/widget/"+widgetId+"/list";
        return fetch(url)
            .then(response =>response.json()
        )
    }


    static updateWidget = (widgetId,widget) =>{
        var url = herokuUrl+"api/widget/"+widgetId+"/list";
        console.log(url);
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
             'Content-Type': 'application/json' 
            }           
        })
        .then(response =>response.json())
    }

    static deleteWidget = (widgetId) =>{
        var url = herokuUrl+"api/widget/"+widgetId+"/list";
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }
}