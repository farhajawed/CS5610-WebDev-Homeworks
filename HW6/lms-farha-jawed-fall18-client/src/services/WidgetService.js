var herokuUrl="https://lms-farha-jawed-fall18-server.herokuapp.com/";

export default class WidgetService {
    
    static createWidget = (topicId,widget) =>{
        var type = "heading";
        if(widget.widgetType==="LIST"){
              type = "list"
        }
        else if(widget.widgetType==="LINK"){
            type="link"
        }
        else if(widget.widgetType==="PARAGRAPH"){
            type="paragraph"
        }
        else if(widget.widgetType==="IMAGE"){
            type="image"
        }
       
        var url = herokuUrl+"api/topic/"+topicId+"/widget/"+type;
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
        var url = herokuUrl+"api/topic/"+topicId+"/widget";
        return fetch(url)
            .then(response =>response.json()
        )
    }

    static findWidgetById = (widgetId) =>{
        var url = herokuUrl+"api/widget/"+widgetId;
        return fetch(url)
            .then(response =>response.json()
        )
    }


    static updateWidget = (widgetId,widget) =>{
        console.log("*****",widget);
        var type = "heading";
        if(widget.widgetType==="LIST"){
              type = "list"
        }
        else if(widget.widgetType==="LINK"){
            type="link"
        }
        else if(widget.widgetType==="PARAGRAPH"){
            type="paragraph"
        }
        else if(widget.widgetType==="IMAGE"){
            type="image"
        }
       
        var url = herokuUrl+"api/widget/"+widgetId+"/"+type;
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

    static deleteWidget = (topicId,widgetId) =>{
        var url = herokuUrl+"api/topic/"+topicId+"/widget/"+widgetId;
        console.log(url);
        return fetch(url,{
            method: 'delete',
            credentials: 'include'   
        })
        .then(response =>response.json())
    }

    
    static saveWidgets = (widgets) =>{
        //asyn with let
        for(let i = 0; i<widgets.length; i++){
            WidgetService.updateWidget(widgets[i].id,widgets[i]);
        }
    }

    
}


