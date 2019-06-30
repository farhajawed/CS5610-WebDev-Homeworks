import React from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';

const HeadingWidget = ({widget,deleteWidget,updateWidget,setWidgetType,previewWidget,moveUp,moveDown,isTop,isBottom}) =>{
       let input,select,selectWidget,inputName;
       return(
        <div className="mt-2 mb-2"> 
             <div className={previewWidget ==="OFF"? "row heading-widget mt-2 mb-2":""}>
                <div className="col-md-12">
                    <div className="row" style={{display: previewWidget ==="ON" ? 'none': ''}}>

                    <div className="col-md-5 col-12">
                        <span className="widget-name">
                           Heading widget 
                        </span>
                    </div>

                    <div className="col-md-3 col-5 text-md-right">
                        {isTop? "" :
                        <button className="btn btn-warning mr-1" onClick={()=>{moveUp(widget)
                                ToastStore.success("Widget moved up!")}}>
                               <i className="fa fa-arrow-up"></i>
                        </button>}
                        {isBottom ? "" :
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
                        <button className="btn btn-danger"
                             onClick={() => deleteWidget(widget.id)}>
                             <i className="fa fa-times"></i>
                         </button>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="form-group row">
                            <label htmlFor="headingText"
                                    className="col-sm-12 col-form-label">
                                    Heading Text
                            </label>
                            <div className="col-sm-12">
                                 <input type="text"
                                        className="form-control"
                                        id="headingText"
                                        placeholder="Heading text"
                                        defaultValue={widget.header}
                                        ref={node => input=node}
                                        onChange={() => {
                                        widget.header = input.value
                                        updateWidget(widget.id,widget)}}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="headingSize"
                                    className="col-sm-12 col-form-label">
                                    Heading Size
                            </label>
                            <div className="col-sm-12">
                                <select className="form-control" id="headingSize" ref={node => select=node} 
                                         defaultValue={widget.size}
                                         onChange={() => {widget.size = select.value
                                                          updateWidget(widget.id,widget)}}>
                                        <option disabled>Choose heading size</option>
                                        <option value="1">Heading 1</option>
                                        <option value="2">Heading 2</option>
                                        <option value="3">Heading 3</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="headingWidgetName"
                                    className="col-sm-12 col-form-label">
                                    Widget Name
                            </label>
                            <div className="col-sm-12">
                                <input  className="form-control"
                                        id="headingWidgetName"
                                        placeholder="Widget Name"
                                        defaultValue={widget.name} 
                                        ref={node => inputName=node}
                                        onChange={() => {widget.name = inputName.value
                                                         updateWidget(widget.id,widget)}}/>
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
                    {widget.size === "1" && <h1>{widget.header}</h1>}
                    {widget.size === "2" && <h2>{widget.header}</h2>}
                    {widget.size === "3" && <h3>{widget.header}</h3>}
            </div>
        </div>
        <ToastContainer store={ToastStore}/>
     </div>
    )}
export default HeadingWidget

