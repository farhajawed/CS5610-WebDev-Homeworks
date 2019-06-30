import React from 'react'
import {Link} from 'react-router-dom'

const CourseHeader = ({view}) =>
     <div className="fixed-top course-header-row d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            Title
                        </div>
                        <div className="col-md-3 show">
                            <a className="dropdown-toggle"
                                id="dropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Owned By
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item">Owned by me <i className="fa fa-check"></i></a>
                                <a className="dropdown-item">Owned by anyone</a>
                                <a className="dropdown-item">Not owned by me</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            Last modified by me
                        </div>
                        <div className="col-md-1">
                           {view==="table"?
                            <Link to="/course/grid"
                                className="grid-view-link">
                                   <i className="fa fa-th"></i>
                            </Link>:
                            <Link to="/course/table"
                                className="grid-view-link">
                                   <i className="fa fa-list-ul"></i>  
                            </Link>
                            }
                        </div>
                        <div className="col-md-1">
                            <a className="dropdown-toggle"
                                id="dropdownMenuSortLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-sort"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSortLink">
                                <a className="dropdown-item">Last modified by me
                                     <i className="fa fa-check"></i>
                                </a>
                                <a className="dropdown-item">Last opened by me</a>
                                <a className="dropdown-item">Last modified</a>
                                <a className="dropdown-item">Title</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    
export default CourseHeader

 