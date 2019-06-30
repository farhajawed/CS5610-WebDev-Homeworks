import React from 'react'
import LessonTab from "./LessonTab";

class LessonTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newLessonTitle: 'New Lesson',
            lessons: this.props.lessons
        }
    }
  
    formChanged = (event) => {
        this.setState({
            newLessonTitle: event.target.value
        })
    }

    addNewLesson = () => {
        let lessons = this.props.lessons;
        lessons.push({
            id:(new Date()).getTime()+'',
            title: this.state.newLessonTitle
        })
        this.setState({
            lessons: lessons
        })
    }

    deleteLesson = (lesson) =>{
        var index = -1;
        let lessons = this.state.lessons;
        for(var i = 0; i<lessons.length; i++){
            console.log(lesson.id, lessons.id);
            if(lessons[i].id === lesson.id){
                index = i;
                break;
            }
        }
        lessons.splice(index, 1);
        this.setState({
            lessons: lessons
        })
    }

    updateLesson = (id,title) =>{
        var index = -1;
        let lessons = this.state.lessons;
        for(var i = 0; i<lessons.length; i++){
            if(lessons[i].id === id){
                index = i;
                break;
            }
        }
        lessons[index].title = title;
        this.setState({
            lessons: lessons
        })
    }


    render(){
        return(
            <div className="collapse navbar-collapse"
                        id="navbarNavDropdown">
                {this.props.lessons!==undefined?
                <ul className="navbar-nav course-editor-nav">
                {
                        this.props.lessons.map((lesson, index) =>
                            <LessonTab
                                selected={this.props.selectedLesson === lesson}
                                selectLesson={this.props.selectLesson}
                                deleteLesson = {this.deleteLesson}
                                updateLesson={this.updateLesson}
                                lesson={lesson}
                                key={index}/>
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