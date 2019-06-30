import WidgetService from '../services/WidgetService'

const WidgetReducer = (state = {widgets:[],preview:"OFF",topicId:""}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        var newWidget = action.widgets[action.widgets.length-1];
        var newWidgetList = state.widgets.concat(newWidget);
           return{
                preview: state.preview,
                widgets: newWidgetList,
                topicId:state.topicId
           }

       
        case "FIND_ALL_WIDGETS_FOR_TOPIC":  
            return {
                preview: action.preview,
                widgets: action.widgets,
                topicId:action.topic.id  
        }

        case "TOGGLE_PREVIEW":
            var mode = "ON";
            if(state.preview==="ON"){
                mode = "OFF";
            }
            return { 
                preview: mode,
                widgets: state.widgets
        }
        
        case "DELETE_WIDGET":
           return {
               preview: state.preview,
               widgets: action.widgets,
               topicId:state.topicId
           }

        case "UPDATE_WIDGET_STATE":
           return {
               preview: state.preview,
               widgets: state.widgets.slice(0),
               topicId:state.topicId
           }


        case "MOVE_UP":{
            let index = state.widgets.indexOf(action.widget);
            let widgetCurrent = state.widgets[index];
            let widgetUp = state.widgets[index-1];
            state.widgets[index] = widgetUp;
            state.widgets[index-1] = widgetCurrent;
            return { 
                preview: state.preview,
                widgets: state.widgets.slice(0),
                topicId:state.topicId
            }
        }

        case "MOVE_DOWN":{
            let index = state.widgets.indexOf(action.widget);
            let widgetCurrent = state.widgets[index];
            let widgetDown = state.widgets[index+1];
            state.widgets[index] = widgetDown;
            state.widgets[index+1] = widgetCurrent;
            return { 
                preview: state.preview,
                widgets: state.widgets.slice(0),
                topicId:state.topicId
            }
        }
        
        case "SAVE_WIDGETS":{
            WidgetService.findWidgets(state.topicId).then((newWidgets)=>{
                return { 
                    preview: state.preview,
                    widgets: newWidgets.slice(0),
                    topicId:state.topicId
                }
            })}

        default:
            return state
    }
}
export default WidgetReducer;