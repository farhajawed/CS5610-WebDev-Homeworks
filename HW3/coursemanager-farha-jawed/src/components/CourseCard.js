import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
  <div className= "col-lg-2 col-md-4 col-sm-12 mb-3">
      <div className="card course-card">
               <img src="/images/note-large.png" class="card-img-top" alt={course.title}/>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                           <i className="fa fa-sticky-note course-icon"></i>{" "}
                            <Link to={`/course/${course.id}/edit`} 
                                className="course-title">
                                    {course.title} 
                            </Link>
                            <Link to={`/course/${course.id}/edit`} className="course-title">
                                   <i class="fa fa-edit ml-2"></i>
                            </Link>
                        </div>
                        <span class="date-sub-header">
                            Opened at 6:45pm
                        </span> {" "}
                        <i class="fa fa-times delete-icon" onClick={() => deleteCourse(course)}></i>
                    </p>
                </div>
        </div>
  </div>
  
export default CourseCard

 