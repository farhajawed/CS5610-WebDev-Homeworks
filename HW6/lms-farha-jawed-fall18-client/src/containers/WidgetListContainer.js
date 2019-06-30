import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'
import WidgetService from '../services/WidgetService'

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview,
    topicId:state.topicId
})


const actionToPropertyMapper = dispatch => ({
    init: (topic) => {
       WidgetService.findWidgets(topic.id)
          .then(widgets => dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            widgets: widgets,
            topic: topic,
            preview:"OFF"
            })
          )
    },

    createWidget: (topicId,widget) => {
        WidgetService.createWidget(topicId,widget)
           .then(widgets => dispatch({
               type: 'CREATE_WIDGET',
               widgets: widgets
            })
           )
    },

    togglePreview:() => dispatch({
        type: "TOGGLE_PREVIEW"
    }),

    deleteWidget: (topicId,widgetId) =>{
        WidgetService.deleteWidget(topicId,widgetId)
           .then(widgets => dispatch({
               type: 'DELETE_WIDGET',
               widgets: widgets,
               widgetId:widgetId
             })
        )
    },

    
    updateWidgetState: (widgetId,widget) => dispatch({
        type: 'UPDATE_WIDGET_STATE',
        widget: widget,
        widgetId:widgetId
    }),

    saveWidgets: (widgets) => {
        WidgetService.saveWidgets(widgets);
        dispatch({
            type: 'SAVE_WIDGETS',
            widgets:widgets
          })
    },


    moveUp:(widget) => dispatch({
        type: 'MOVE_UP',
        widget: widget
    }),
    
    moveDown:(widget) => dispatch({
        type: 'MOVE_DOWN',
        widget: widget
    })
 })
   
const WidgetListContainer = connect(stateToPropertyMapper,actionToPropertyMapper)(WidgetList)

export default WidgetListContainer