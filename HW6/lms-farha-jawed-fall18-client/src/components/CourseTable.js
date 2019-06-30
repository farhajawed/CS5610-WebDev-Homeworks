import React from 'react';
import './CourseTable.style.css';
import CourseAdd from './CourseAdd';
import CourseRow from './CourseRow';
import CourseHeader from './CourseHeader';
import Footer from './Footer';
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";

class CourseTable extends React.Component{

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
                <CourseHeader view="table"/>
                <div className="container course-list course-list-first">
                    <div className="row modify-day">
                        <div className="col-md-12">
                            Recent Documents
                        </div>
                    </div>
                    {
                    this.state.courses.map((course) =>
                        (<CourseRow
                            deleteCourse={this.deleteCourse}
                            key={course.id}
                            course={course}/>))}
                </div>
                <Footer/>
           </div>
        )
    }
        
}
export default CourseTable;