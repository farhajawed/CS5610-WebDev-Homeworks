import React from 'react';

const WidgetList = () =>
        <div>
            <div className="col-md-12 mt-2 mb-2">
                    <div className="row heading-widget">
                            <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Heading Widget
                                </span>
                            </div>
                            <div className="col-md-3 col-5 text-md-right">
                                <button className="btn btn-warning mr-1">
                                    <i className="fa fa-arrow-up"></i>
                                </button>
                                <button className="btn btn-warning">
                                    <i className="fa fa-arrow-down"></i>
                                </button>
                            </div>
                            <div className="col-md-3 col-5">
                                <select className="form-control" id="widgetType">
                                    <option disabled>Widget Type</option>
                                    <option selected>Heading</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Image</option>
                                    <option>Link</option>
                                </select>
                            </div>
                            <div className="col-md-1 col-2">
                                <button className="btn btn-danger">
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
                                                placeholder="Heading text"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="headingSize"
                                            className="col-sm-12 col-form-label">
                                            Heading Size
                                    </label>
                                    <div className="col-sm-12">
                                        <select className="form-control" id="headingSize">
                                            <option disabled>Choose heading size</option>
                                            <option selected>Heading 1</option>
                                            <option>Heading 2</option>
                                            <option>Heading 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="headingWidgetName"
                                            className="col-sm-12 col-form-label">
                                            Widget Name
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text"
                                                className="form-control"
                                                id="headingWidgetName"
                                                placeholder="Widget name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                            </div>
                            <div className="col-md-12">
                                <h1>Heading Text</h1>
                            </div>
                        </div>
                </div>
                
                <div className="col-md-12 mt-2 mb-2">
                    <div className="row heading-widget">
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    List Widget
                                </span>
                        </div>
                        <div className="col-md-3 col-5 text-md-right">
                            <button className="btn btn-warning mr-1">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-warning">
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-5">
                            <select className="form-control">
                                <option disabled>Widget Type</option>
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option selected>List</option>
                                <option>Image</option>
                                <option>Link</option>
                            </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger">
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
                                                placeholder="Enter one&#x0a;list item&#x0a;per line"
                                                rows="3"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="listType"
                                        className="col-sm-12 col-form-label">
                                        List Type
                                </label>
                                <div className="col-sm-12">
                                    <select className="form-control" id="listType">
                                        <option disabled>Choose list type</option>
                                        <option selected>Unordered list</option>
                                        <option>Ordered list</option>
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
                                            placeholder="Widget name"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                        </div>
                        <div className="col-md-12">
                            <ul>
                                <li>Enter one</li>
                                <li>list item</li>
                                <li>per line</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12 mt-2 mb-2">
                    <div className="row heading-widget">
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Paragraph Widget
                                </span>
                        </div>
                        <div className="col-md-3 col-5 text-md-right">
                            <button className="btn btn-warning mr-1">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-warning">
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-5">
                            <select className="form-control">
                                <option disabled>Widget Type</option>
                                <option>Heading</option>
                                <option selected>Paragraph</option>
                                <option>List</option>
                                <option>Image</option>
                                <option>Link</option>
                            </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger">
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
                                                rows="3"></textarea>
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
                                            placeholder="Widget name"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3 mb-2">
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                        </div>
                        <div className="col-md-12">
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12 mt-2 mb-2">
                    <div className="row heading-widget">
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Image Widget
                                </span>
                        </div>
                        <div className="col-md-3 col-5 text-md-right">
                            <button className="btn btn-warning mr-1">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-warning">
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-5">
                            <select className="form-control" id="imageWidgetType">
                                <option disabled>Widget Type</option>
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option>List</option>
                                <option selected>Image</option>
                                <option>Link</option>
                            </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger">
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
                                            placeholder="http://www.africansunsand.com/images/pc1.jpg"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="imageWidgetName" className="col-sm-12 col-form-label">
                                    Widget Name</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                            className="form-control"
                                            id="imageWidgetName"
                                            placeholder="Widget name"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                        </div>
                        <div className="col-md-12">
                            <img src="http://www.africansunsand.com/images/pc1.jpg"
                                    className="img-fluid" alt="pic"/>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12 mt-2 mb-2">
                    <div className="row heading-widget">
                        <div className="col-md-5 col-12">
                                <span className="widget-name">
                                    Link Widget
                                </span>
                        </div>
                        <div className="col-md-3 col-5 text-md-right">
                            <button className="btn btn-warning mr-2">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-warning">
                                <i className="fa fa-arrow-down"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-5">
                            <select className="form-control">
                                <option disabled>Widget Type</option>
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option>List</option>
                                <option>Image</option>
                                <option selected>Link</option>
                            </select>
                        </div>
                        <div className="col-md-1 col-2">
                            <button className="btn btn-danger">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="form-group row">
                                <label htmlFor="linkUrl" className="col-sm-12 col-form-label">
                                    Link URL</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control"
                                            id="linkUrl"
                                            placeholder="https://www.youtube.com/user/BuzzFeedVideo"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="linkText" className="col-sm-12 col-form-label">
                                    Link Text</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control"
                                            id="linkText"
                                            placeholder="Link Text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="linkWidgetName" className="col-sm-12 col-form-label">
                                    Widget Name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control"
                                            id="linkWidgetName" placeholder="Widget name"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3 mb-2">
                                <span className="preview">
                                    <img src="/images/preview-icon.png" alt="preview"/>
                                        Preview
                                </span>
                        </div>
                        <div className="col-md-12">
                            <a href="https://www.youtube.com/user/BuzzFeedVideo">
                                Link Text
                            </a>
                        </div>
                    </div>
            </div>
     </div>


export default WidgetList;