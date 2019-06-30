import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic)
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit, this.props.topic)
    }

    render() {
        var newWidget= {   
            "id":(new Date()).getTime()+'',
            "type": "HEADING",
            "size": "1"
        }
        return(
            <div>
                <div className="text-right">Preview {" "}
                    <button className={this.props.preview==="ON"?"btn btn-success mr-2":"btn btn-danger mr-2"} 
                            onClick={this.props.togglePreview}>
                        {this.props.preview}
                    </button>
                    <button className="btn btn-info" onClick={this.props.saveWidgets}>
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
                            {widget.type === "HEADING" && <HeadingWidget updateWidget={this.props.updateWidget} 
                                                                         deleteWidget={this.props.deleteWidget}
                                                                         previewWidget={this.props.preview}
                                                                         moveUp={this.props.moveUp}
                                                                         moveDown={this.props.moveDown}
                                                                         widget={widget}
                                                                         setWidgetType={this.props.setWidgetType}
                                                                         isTop={index===0}
                                                                         isBottom={index===this.props.widgets.length-1}/>}
                            {widget.type === "LIST" && <ListWidget updateWidget={this.props.updateWidget} 
                                                                   deleteWidget={this.props.deleteWidget} 
                                                                   previewWidget={this.props.preview}
                                                                   moveUp={this.props.moveUp}
                                                                   moveDown={this.props.moveDown}
                                                                   widget={widget} 
                                                                   setWidgetType={this.props.setWidgetType}
                                                                   isTop={index===0}
                                                                   isBottom={index===this.props.widgets.length-1}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget updateWidget={this.props.updateWidget} 
                                                                             deleteWidget={this.props.deleteWidget} 
                                                                             previewWidget={this.props.preview}
                                                                             moveUp={this.props.moveUp}
                                                                             moveDown={this.props.moveDown}
                                                                             widget={widget}
                                                                             setWidgetType={this.props.setWidgetType}
                                                                             isTop={index===0} 
                                                                             isBottom={index===this.props.widgets.length-1}/>}
                            {widget.type === "IMAGE" && <ImageWidget updateWidget={this.props.updateWidget} 
                                                                     deleteWidget={this.props.deleteWidget} 
                                                                     previewWidget={this.props.preview}
                                                                     moveUp={this.props.moveUp}
                                                                     moveDown={this.props.moveDown}
                                                                     widget={widget} 
                                                                     setWidgetType={this.props.setWidgetType}
                                                                     isTop={index===0}
                                                                     isBottom={index===this.props.widgets.length-1}/>}
                            {widget.type === "LINK" && <LinkWidget updateWidget={this.props.updateWidget} 
                                                                   deleteWidget={this.props.deleteWidget} 
                                                                   previewWidget={this.props.preview}
                                                                   moveUp={this.props.moveUp}
                                                                   moveDown={this.props.moveDown}
                                                                   widget={widget} 
                                                                   setWidgetType={this.props.setWidgetType}
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
            </div>
        )
    }
}
export default WidgetList