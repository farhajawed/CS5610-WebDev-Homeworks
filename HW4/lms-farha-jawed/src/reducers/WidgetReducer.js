
import CourseService from '../services/CourseService'

const WidgetReducer = (state = {widgets:[],preview:"OFF"}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
           CourseService.createWidget(action.topicId,action.widget)
           return{
                preview: state.preview,
                widgets: CourseService.findWidgets(action.topicId).slice(0),
                selectedTopic: state.selectedTopic,
           }

        case "DELETE_WIDGET":
           CourseService.deleteWidget(action.widgetId);
           const newWidgets = CourseService.findWidgets(state.selectedTopic.id);
           return {
               preview: state.preview,
               widgets: newWidgets.slice(0),
               selectedTopic: state.selectedTopic
           }
       case "UPDATE_WIDGET":
           CourseService.updateWidget(action.widgetId, action.widget);
           const updatedWidgets = CourseService.findWidgets(state.selectedTopic.id)
           return {
               preview: state.preview,
               widgets: updatedWidgets.slice(0),
               selectedTopic: state.selectedTopic
        }

        case "FIND_WIDGET":
            CourseService.findWidget(action.widgetId);
            return {
                widgets: CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic,
                preview: state.preview
            }
       
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                widgets: CourseService.findWidgets(action.topic.id),
                selectedTopic: action.topic,
                preview: state.preview
            }
        
        case "FIND_ALL_WIDGETS":
            return {
                widgets: CourseService.findAllWidgets(),
                selectedTopic: state.selectedTopic,
                preview: state.preview
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
                selectedTopic: state.selectedTopic
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
                selectedTopic: state.selectedTopic
            }
        }

        case "SET_WIDGET_TYPE":{
            let index;
            for(let i =0; i<state.widgets.length;i++){
                 if(state.widgets[i].id === action.widgetId){
                    index = i;
                    break;
                 }
            }
            state.widgets[index].type = action.widgetType;
            /**
             * setting the defaults when change occurs
             */
            if(action.widgetType==="HEADING" && !state.widgets[index].size){
                state.widgets[index].size="1";
            }

            else if(action.widgetType==="LIST" &&  !state.widgets[index].listType){
                state.widgets[index].listType="ul";
            }
            return { 
                preview: state.preview,
                widgets: state.widgets.slice(0),
                selectedTopic: state.selectedTopic
            } 
        }
        case "TOGGLE_PREVIEW":
            var mode = "ON";
            if(state.preview==="ON"){
                mode = "OFF";
            }
            return { 
                preview: mode,
                widgets: CourseService.findWidgets(state.selectedTopic.id).slice(0),
                selectedTopic: state.selectedTopic
        }
        case "SAVE_WIDGETS":{
           CourseService.saveWidgetList(state.widgets,state.selectedTopic.id);
            return { 
                preview: state.preview,
                widgets: CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            } 
        }

        default:
            return state
    }
}
export default WidgetReducer;