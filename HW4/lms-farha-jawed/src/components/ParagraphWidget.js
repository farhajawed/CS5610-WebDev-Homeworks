
import React from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';

const ParagraphWidget = ({widget, updateWidget,setWidgetType,deleteWidget,previewWidget,moveUp,moveDown,isTop,isBottom}) => {
    let textarea,selectWidget,inputName;
    return(
        <div className="mt-2 mb-2">
            <div className={previewWidget ==="OFF"? "row heading-widget mt-2 mb-2":""}>
                <div className="col-md-12">
                    <div className="row" style={{display: previewWidget ==="ON" ? 'none': ''}}>
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Paragraph Widget 
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
                            <select className="form-control" id="widgetType" value={widget.type}
                                    ref={node => selectWidget=node}
                                    onChange={() => setWidgetType(widget.id,selectWidget.value)}>
                                <option disabled>Widget Type</option>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value ="LIST">List</option>
                                <option value="IMAGE">Image</option>
                                <option value="LINK">Link</option>
                            </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger" onClick={() => deleteWidget(widget.id)}>
                                <i className="fa fa-times"></i>
                           </button>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="form-group row">
                                <label htmlFor="paragraphText"
                                        className="col-sm-12 col-form-label">
                                        Paragraph Text
                                </label>
                                <div className="col-sm-12">
                                    <textarea className="form-control"
                                                id="paragraphText"
                                                placeholder="Lorem ipsum"
                                                defaultValue={widget.text}
                                                rows="5"
                                                ref={node => textarea=node}
                                                onChange={() => {widget.text = textarea.value 
                                                                 updateWidget(widget.id,widget)}}></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="paragraphWidgetName"
                                        className="col-sm-12 col-form-label">
                                        Widget Name
                                </label>
                                <div className="col-sm-12">
                                    <input type="text"
                                            className="form-control"
                                            id="paragraphWidgetName"
                                            placeholder="Widget name"
                                            defaultValue={widget.name} 
                                            ref={node => inputName=node}
                                            onChange={() => {widget.name = inputName.value
                                                          updateWidget(widget.id,widget)}} />
                                </div>
                               </div>
                             </div>
                           </div>
                        </div>
                        <div className="col-md-12 mt-3 mb-2" style={{display: previewWidget ==="ON" ? 'none': ''}}>
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                        </div>
                        <div className="col-md-12">
                            <p>{widget.text}</p>
                        </div>
                    </div>
                
                    <ToastContainer store={ToastStore}/>
                </div>
    )}

export default ParagraphWidget