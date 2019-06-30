import React from 'react';
import {ToastContainer, ToastStore} from 'react-toasts';

const ListWidget = ({widget,updateWidgetState,deleteWidget,previewWidget,moveUp,moveDown,isTop,isBottom,topicId}) => {
    let textarea,select,selectWidget,inputName;
    return(
    <div className="mt-2 mb-2">
        <div className={previewWidget ==="OFF"? "row heading-widget mt-2 mb-2":""}>
                <div className="col-md-12">
                    <div className="row" style={{display: previewWidget ==="ON" ? 'none': ''}}>
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    List Widget 
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
                            <button className="btn btn-danger" 
                                    onClick={() => deleteWidget(topicId,widget.id)}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="form-group row">
                                <label htmlFor="listText"
                                        className="col-sm-12 col-form-label">
                                        List Item
                                </label>
                                <div className="col-sm-12">
                                        <textarea className="form-control"
                                                id="listText"
                                                defaultValue={widget.options}
                                                placeholder="Enter one&#x0a;list item&#x0a;per line"
                                                rows="3"
                                                ref={node => textarea=node}
                                                onChange={() => {widget.options = textarea.value
                                                                 updateWidgetState(widget.id,widget,topicId)}}>
                                        </textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="listType"
                                        className="col-sm-12 col-form-label">
                                        List Type
                                </label>
                                <div className="col-sm-12">
                                    <select className="form-control" id="listType" ref={node => select=node} 
                                             defaultValue={widget.listType}
                                             onChange={() => {widget.listType = select.value
                                                         updateWidgetState(widget.id,widget)}}>
                                        <option disabled>Choose list type</option>
                                        <option value="ul">Unordered list</option>
                                        <option value="ol">Ordered list</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="listWidgetName"
                                        className="col-sm-12 col-form-label">
                                        Widget Name
                                </label>
                                <div className="col-sm-12">
                                    <input type="text"
                                            className="form-control"
                                            id="listWidgetName"
                                            placeholder="Widget name"
                                            defaultValue={widget.title} 
                                            ref={node => inputName=node}
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
                            {widget.options!==null && widget.options!==undefined?
                                widget.listType==="ol"?
                                <ol>
                                {
                                    widget.options.split('\n').map((option, index) =>
                                    <li key={index}>{option}</li>
                                    )
                                }
                                </ol>:
                                <ul>
                                {
                                    widget.options.split('\n').map((option, index) =>
                                    <li key={index}>{option}</li>
                                    )
                                }
                                </ul>
                                :""}
                        </div>
                    </div>
                    <ToastContainer store={ToastStore}/>
                </div>
 )}

export default ListWidget