import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const actionToPropertyMapper = dispatch => ({
    init: (widgets, topic) => dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
        widgets: widgets,
        topic: topic
    }),
    createWidget: (topicId,widget) => dispatch({
        type: 'CREATE_WIDGET',
        topicId:topicId,
        widget: widget
    }),
    findWidgets: () => dispatch({
        type: 'FIND_ALL_WIDGETS'
    }),
    findWidget: (widgetId) => dispatch({
        type: 'FIND_WIDGET',
        widgetId: widgetId
    }),
    updateWidget: (widgetId,widget) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        widgetId:widgetId
    }),
    deleteWidget: (widgetId) => dispatch({
        type: 'DELETE_WIDGET',
        widgetId: widgetId
    }),
    togglePreview:() => dispatch({
        type: "TOGGLE_PREVIEW"
    }),
    moveUp:(widget) => dispatch({
        type: 'MOVE_UP',
        widget: widget
    }),
    moveDown:(widget) => dispatch({
        type: 'MOVE_DOWN',
        widget: widget
    }),
    setWidgetType:(widgetId,widgetType)=>dispatch({
        type:'SET_WIDGET_TYPE',
        widgetType:widgetType,
        widgetId:widgetId
    }),
    saveWidgets:()=>dispatch({
        type: 'SAVE_WIDGETS'
    })
})

const WidgetListContainer = connect(stateToPropertyMapper, actionToPropertyMapper)(WidgetList)

export default WidgetListContainer