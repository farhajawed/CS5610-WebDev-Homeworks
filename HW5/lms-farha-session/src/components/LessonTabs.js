import React from 'react'
import LessonTab from "./LessonTab";
import CourseService from "../services/CourseService";

class LessonTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newLessonTitle: 'New Lesson',
            lessons: []
        }
    }

    componentDidUpdate(prevPros) {
        if(prevPros.module.id !== this.props.module.id) {
         CourseService.findLesson(this.props.module.id)
            .then(lessons =>this.setState({
              lessons: lessons
            })
        )
        }
    }
  
    formChanged = (event) => {
        this.setState({
            newLessonTitle: event.target.value
        })
    }

    addNewLesson = () => {
        var newLesson={
            title: this.state.newLessonTitle
        }
        CourseService.createLesson(this.props.module.id,newLesson).then(
            lessons =>this.setState({
                    lessons: lessons
            },()=>{
                if(this.state.lessons.length===1){
                    this.props.selectLesson(this.state.lessons[0])
                }
            }))
    }

    deleteLesson = (lessonId) =>{
        CourseService.deleteLesson(lessonId)
          .then(lessons => {
              console.log(lessons);
            return (this.setState({
                    lessons: lessons})
        )})
    }

    render(){
        return(
            <div className="collapse navbar-collapse"
                        id="navbarNavDropdown">
                {this.state.lessons!==undefined?
                <ul className="navbar-nav course-editor-nav">
                {
                        this.state.lessons.map((lesson) =>
                            <LessonTab
                                selected={this.props.selectedLesson.id === lesson.id}
                                selectLesson={this.props.selectLesson}
                                deleteLesson = {this.deleteLesson}
                                lesson={lesson}
                                key={lesson.id}/>
                        )
                }
                </ul>:""}

                <div className="form-inline">
                        <input type="text"
                               className="form-control mr-2"  
                                placeholder="New Lesson"
                                onChange={this.formChanged} />
                
                        <button type="submit" 
                                className="btn btn-success"
                                onClick={this.addNewLesson}>
                            <i className="fa fa-plus"></i>
                        </button>
                
                </div>
            </div>
        )
    }
}
    
export default LessonTabs;