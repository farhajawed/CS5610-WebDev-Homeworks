import React from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';

const ImageWidget = ({widget,deleteWidget,previewWidget,updateWidgetState,moveUp,moveDown,isTop,isBottom,topicId}) => {
    let input,selectWidget,inputName;
    return(
         <div className="mt-2 mb-2">
            <div className={previewWidget ==="OFF"? "row heading-widget mt-2 mb-2":""}>
                <div className="col-md-12">
                    <div className="row" style={{display: previewWidget ==="ON" ? 'none': ''}}>
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Image Widget 
                                </span>
                        </div>
                        <div className="col-md-3 col-5 text-md-right">
                           
                           {isTop?"":
                            <button className="btn btn-warning mr-1" onClick={()=>{moveUp(widget)
                                    ToastStore.success("Widget moved up!")}}>
                                <i className="fa fa-arrow-up"></i>
                            </button>}
                            {isBottom?"":
                            <button className="btn btn-warning" onClick={()=>{moveDown(widget)
                                    ToastStore.info("Widget moved down!")}}>
                                <i className="fa fa-arrow-down"></i>
                            </button>}
                        </div>
                        <div className="col-md-3 col-5">
                            <select className="form-control" id="widgetType" defaultValue={widget.widgetType}
                                    ref={node => selectWidget=node}
                                    onChange={() => {widget.widgetType = selectWidget.value
                                             updateWidgetState(widget.id,widget)}}>
                                <option disabled>Widget Type</option>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value ="LIST">List</option>
                                <option value="IMAGE">Image</option>
                                <option value="LINK">Link</option>
                           </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger" onClick={() => deleteWidget(topicId,widget.id)}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="form-group row">
                                <label htmlFor="imageUrl" className="col-sm-12 col-form-label">
                                    Image URL </label>
                                <div className="col-sm-12">
                                    <input type="text"
                                            className="form-control"
                                            id="imageUrl"
                                            defaultValue={widget.url}
                                            placeholder="http://lorempixel.com/400/200/sports/"
                                            ref={node => input=node}
                                                onChange={() => {widget.url = input.value
                                                                 updateWidgetState(widget.id,widget)}}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="imageWidgetName" className="col-sm-12 col-form-label">
                                    Widget Name</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                            className="form-control"
                                            id="imageWidgetName"
                                            placeholder="Widget name"
                                            ref={node => inputName=node}
                                            defaultValue={widget.title} 
                                            onChange={() => {widget.title = inputName.value
                                                             updateWidgetState(widget.id,widget)}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3" style={{display: previewWidget ==="ON" ? 'none': ''}}>
                        <span className="preview">
                            <img src="/images/preview-icon.png" alt="preview"/>
                                Preview
                        </span>
                </div>
                <div className="col-md-12">
                    {widget.url ?
                    <img src={widget.url}
                          className="img-fluid" alt="" />:""}
                </div>
            </div>
           <ToastContainer store={ToastStore}/>
        </div>           
    )
}

export default ImageWidget;