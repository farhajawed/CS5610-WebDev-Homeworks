import React from 'react';
import './CourseTable.style.css';
import CourseAdd from './CourseAdd';
import CourseCard from './CourseCard';
import CourseHeader from './CourseHeader';
import Footer from './Footer';

const CourseGrid =({courses, deleteCourse, addCourse})=>
        <div>
            <CourseAdd addCourse={addCourse}/>              
            <CourseHeader view="grid"/>
            <div class="container course-list course-list-first">
                <div class="row modify-day">
                    <div class="col-md-12">
                        Recent Documents
                    </div>
                </div>
                <div className="row">
                    {
                        courses.map((course, index) =>
                            (<CourseCard
                                deleteCourse={deleteCourse}
                                key={index}
                                course={course}/>)
                        )
                    }
                </div>
           </div>
           <Footer/>
        </div>
       
export default CourseGrid;