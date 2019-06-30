import React from 'react';
import './CourseTable.style.css';
import CourseAdd from './CourseAdd';
import CourseRow from './CourseRow';
import CourseHeader from './CourseHeader';
import Footer from './Footer';

const CourseTable =({courses, deleteCourse, addCourse})=>
        <div>
            <CourseAdd addCourse={addCourse}/>              
            <CourseHeader view="table"/>
            <div class="container course-list course-list-first">
                <div class="row modify-day">
                    <div class="col-md-12">
                        Recent Documents
                    </div>
                </div>
                {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
                }
            </div>
            <Footer/>
        </div>
       
export default CourseTable;