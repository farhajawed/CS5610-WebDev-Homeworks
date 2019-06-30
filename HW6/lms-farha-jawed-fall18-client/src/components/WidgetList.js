import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";
import {ToastContainer, ToastStore} from 'react-toasts';

class WidgetList extends React.Component {
    constructor(props) {
        super(props);     

        this.state = {
            widgets: []
          }
    }

    componentDidUpdate(prevProps) {
      if(prevProps.topic.id!==this.props.topic.id){
        this.props.init(
          this.props.topic
        )}
    }
    
    render() {
        var newWidget= {   
            "widgetType": "HEADING",
            "size": "1"
        }
        return(
            <div>
                <div className="text-right">Preview {" "}
                    <button className={this.props.preview==="ON"?"btn btn-success mr-2":"btn btn-danger mr-2"} 
                            onClick={this.props.togglePreview}>
                        {this.props.preview}
                    </button>
                    <button className="btn btn-info" onClick={()=>{this.props.saveWidgets(this.props.widgets)
                                                     ToastStore.success("Widgets Saved!")}}>
                        Save
                    </button>
                </div>
                <span className="preview" style={{display: this.props.preview ==="OFF" ? 'none': ''}}>
                    <img src="/images/preview-icon.png" alt="preview"/>
                    Preview
                </span>
                <div className={this.props.preview ==="ON"? "heading-widget mt-2 mb-2":""}>     
                   {
                    this.props.widgets.map((widget,index) =>     
                        <div key={widget.id}>
                            {widget.widgetType === "HEADING" && <HeadingWidget  previewWidget={this.props.preview}
                                                                                deleteWidget={this.props.deleteWidget}
                                                                                updateWidgetState={this.props.updateWidgetState}
                                                                                widget={widget}
                                                                                topicId={this.props.topic.id}
                                                                                moveUp={this.props.moveUp}
                                                                                moveDown={this.props.moveDown}
                                                                                isTop={index===0}
                                                                                isBottom={index===this.props.widgets.length-1}/>}        

                            {widget.widgetType === "IMAGE" && <ImageWidget   previewWidget={this.props.preview}
                                                                             deleteWidget={this.props.deleteWidget}
                                                                             updateWidgetState={this.props.updateWidgetState}
                                                                             widget={widget}
                                                                             topicId={this.props.topic.id}
                                                                             moveUp={this.props.moveUp}
                                                                             moveDown={this.props.moveDown}
                                                                             isTop={index===0}
                                                                             isBottom={index===this.props.widgets.length-1}/>}   
                           {widget.widgetType === "LINK" && <LinkWidget   previewWidget={this.props.preview}
                                                                          deleteWidget={this.props.deleteWidget}
                                                                          updateWidgetState={this.props.updateWidgetState}
                                                                          widget={widget}
                                                                          topicId={this.props.topic.id}
                                                                          moveUp={this.props.moveUp}
                                                                          moveDown={this.props.moveDown}
                                                                          isTop={index===0}
                                                                          isBottom={index===this.props.widgets.length-1}/>}
                           {widget.widgetType === "PARAGRAPH" && <ParagraphWidget previewWidget={this.props.preview}
                                                                          deleteWidget={this.props.deleteWidget}
                                                                          updateWidgetState={this.props.updateWidgetState}
                                                                          widget={widget}
                                                                          topicId={this.props.topic.id}
                                                                          moveUp={this.props.moveUp}
                                                                          moveDown={this.props.moveDown}
                                                                          isTop={index===0}
                                                                          isBottom={index===this.props.widgets.length-1}/>} 
                           {widget.widgetType === "LIST" && <ListWidget previewWidget={this.props.preview}
                                                                          deleteWidget={this.props.deleteWidget}
                                                                          updateWidgetState={this.props.updateWidgetState}
                                                                          topicId={this.props.topic.id}
                                                                          widget={widget}
                                                                          moveUp={this.props.moveUp}
                                                                          moveDown={this.props.moveDown}
                                                                          isTop={index===0}
                                                                          isBottom={index===this.props.widgets.length-1}/>}                                            
                        </div>  
                    )}
                </div>
                <div className="fixed-bottom mb-3" style={{display: this.props.preview === "ON" ? 'none': ''}}>
                    <button className="float-right btn btn-success new-widget-btn"
                            onClick={()=>this.props.createWidget(this.props.topic.id,newWidget)}>
                           <i className="fa fa-plus"></i>
                    </button>
                </div>
                <ToastContainer store={ToastStore}/>
            </div>
        )
    }
}
export default WidgetList