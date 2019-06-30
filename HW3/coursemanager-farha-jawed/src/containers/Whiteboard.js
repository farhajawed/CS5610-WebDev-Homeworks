import React from 'react';
import CourseTable from '../components/CourseTable';
import CourseGrid from '../components/CourseGrid';
import CourseService from "../services/CourseService";
import CourseEditor from "../components/CourseEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'


class Whiteboard extends React.Component{

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }

    addCourse = newCourse => {
        if(newCourse.title!==""){
            this.courseService.createCourse(newCourse)
            this.setState({
                courses: this.courseService.findAllCourses()
            })
        }
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteModule = moduleId =>{
        this.courseService.deleteModule(moduleId)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }
    
    deleteTopic = topic =>{
        this.courseService.deleteTopic(topic)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    updateCourse = (id, course)=>{
        this.courseService.updateCourse(id,course);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    updateModule = (id, title)=>{
        this.courseService.updateModule(id,title);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    findCourseById = courseId =>
        this.courseService.findCourseById(courseId)
    


    render(){
        return(
             <div>
                <Router>
                   <div>
                        <Route exact path="/"
                                render={() =>
                                    <CourseTable
                                        addCourse={this.addCourse}
                                        deleteCourse={this.deleteCourse}
                                        courses={this.state.courses}/>}/>
                        <Route exact path="/course/grid"
                                render={() =>
                                    <CourseGrid
                                        addCourse={this.addCourse}
                                        deleteCourse={this.deleteCourse}
                                        courses={this.state.courses}/>}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    findCourse={this.findCourseById}
                                    deleteModule={this.deleteModule}
                                    updateModule={this.updateModule}
                                    updateCourse = {this.updateCourse}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                     </div>
                 </Router>
             </div>
        )
    }
}

export default Whiteboard;