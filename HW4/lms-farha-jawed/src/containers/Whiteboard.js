import React from 'react';
import CourseTable from '../components/CourseTable';
import CourseGrid from '../components/CourseGrid';
import CourseService from "../services/CourseService";
import CourseEditor from "../components/CourseEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'


class Whiteboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            courses: CourseService.findAllCourses()
        }
    }

    addCourse = newCourse => {
        if(newCourse.title!==""){
            CourseService.createCourse(newCourse)
            this.setState({
                courses: CourseService.findAllCourses()
            })
        }
    }

    deleteCourse = courseToDelete => {
        CourseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }

    deleteModule = moduleId =>{
        CourseService.deleteModule(moduleId)
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }
    
    deleteTopic = topic =>{
        CourseService.deleteTopic(topic)
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }

    updateCourse = (id, course)=>{
        CourseService.updateCourse(id,course);
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }

    updateModule = (id, title)=>{
        CourseService.updateModule(id,title);
        this.setState({
            courses: CourseService.findAllCourses()
        })
    }

    findCourseById = courseId =>
        CourseService.findCourseById(courseId)
    


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