import React from 'react';
import './CourseTable.style.css';
import CourseAdd from './CourseAdd';
import CourseCard from './CourseCard';
import CourseHeader from './CourseHeader';
import Footer from './Footer';
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";

class CourseGrid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            userId:""
        }
    }


     componentDidMount(){
        UserService.findUserInSession().then(
            user => this.setState({
                userId: user.id
            },()=>{
                CourseService.findAllCourses(this.state.userId).then(
                    courses => this.setState({
                        courses: courses
                }))
            })
        )     
    }

    addCourse = newCourse => {
        if(newCourse.title!==""){
            CourseService.createCourse(this.state.userId,newCourse).then(
                courses => this.setState({
                    courses: courses
            }))
        }
    }

    deleteCourse = (courseId) => {
        CourseService.deleteCourse(this.state.userId,courseId)
          .then(courses => this.setState({
                    courses: courses
            }))
     }

    render(){
        return(
            <div>
                <CourseAdd addCourse={this.addCourse} home={true}/>              
                <CourseHeader view="grid"/>
                <div class="container course-list course-list-first">
                    <div class="row modify-day">
                        <div class="col-md-12">
                            Recent Documents
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.courses.map((course, index) =>
                                (<CourseCard
                                    deleteCourse={this.deleteCourse}
                                    key={index}
                                    course={course}/>)
                            )
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    
}
        
       
export default CourseGrid;