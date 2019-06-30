import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import './CourseEditor.style.css';
import {Link} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import widgets from '../reducers/WidgetReducer';
import WidgetListContainer from '../containers/WidgetListContainer';

const store = createStore(widgets)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;
        const course = this.props.findCourse(courseId);

        this.state={
            isEdit:false
        }
        
        if(course.modules!==undefined){
            const selectedModule = course.modules[0];
            const selectedLesson = selectedModule.lessons[0];
            const selectedTopic = selectedLesson.topics[0];

            this.state = {
                course: course,
                title:course.title,
                selectedModule: selectedModule,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic
            }
        }
        else{
            this.state = {
                course: course,
                title:course.title,
                selectedModule: [],
                selectedLesson: [],
                selectedTopic: []
            }

        }    
  }

    
selectLesson = lesson =>{
    this.setState({
        selectedLesson: lesson,
        selectedTopic: lesson.topics[0]
    })
    console.log(lesson);
}
    
selectTopic = topic =>
    this.setState({
        selectedTopic: topic
    })

selectModule = module => {
    if(module.lessons!==undefined){
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic:module.lessons[0].topics[0] 
        })
    }
    else{
        this.setState({
            selectedModule: module,
            selectedLesson: [],
            selectedTopic:[] 
        })
    }
    
}


editLesson=(isEdit)=>{
    this.setState({
        isEdit:isEdit
    });
    this.props.updateLesson(this.props.lesson.id, this.state.title||"New Lesson");
}

formChanged = (event) => {
    this.setState({
        title: event.target.value
    })
}

editCourse=(isEdit)=>{
    let course = this.state.course;
    course.title = this.state.title;
    this.setState({
        isEdit:isEdit
    });
    this.props.updateCourse(this.state.course.id, course);
}


componentWillMount(){
    document.body.className = "course-editor";
}

componentWillUnmount(){
    document.body.className = null;
}

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                    <button className="navbar-toggler mr-2"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <span className="navbar-brand mx-auto mr-md-5">
                        <Link to="/" className="mr-2 mt-1">
                            <i className="fa fa-times close-editor"></i>
                        </Link>
                        {!this.state.isEdit ?
                        <span>
                            {this.state.title}
                            <i className="fa fa-edit ml-1 click-title"
                                onClick={() => this.setState({isEdit:true})}>
                            </i>
                        </span>
                         :
                         <span>
                                <input type="text"  
                                        className="mr-2"
                                        value={this.state.title}
                                        onChange={this.formChanged} />
                        
                                <button type="submit" 
                                        className="btn btn-info"
                                        onClick={() => this.editCourse(false)}>
                                    <i className="fa fa-check"></i>
                                </button>
                                <button type="submit" 
                                        className="btn btn-danger"
                                        onClick={() => this.setState({isEdit:false})}>
                                    <i className="fa fa-times"></i>
                                </button>          
                        </span>
                        }
                    </span>
                    <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            updateLesson={this.props.updateLesson}
                            lessons={this.state.selectedModule.lessons||[]}/>            
                </nav>    
                
                <div className="container-fluid widget-container">
                    <div className="row">
                        <ModuleList
                                selectModule={this.selectModule}
                                selectedModule={this.state.selectedModule}
                                deleteModule={this.props.deleteModule}
                                updateModule={this.props.updateModule}
                                modules={this.state.course.modules||[]}
                               />

                        <div className="col-md-9 topic-list">
                            <div className="row">
                                <div className="col-md-12">
                                    <TopicPills
                                        selectTopic={this.selectTopic}
                                        selectedTopic={this.state.selectedTopic}
                                        updateTopic={this.props.updateTopic}
                                        topics={this.state.selectedLesson.topics||[]}/>
                                </div>
                               
                                <div className="col-md-12">     
                                      <Provider store={store}>
                                             <WidgetListContainer  
                                                     topic={this.state.selectedTopic}
                                                     widgetsInit={this.state.selectedTopic.widgets} />
                                      </Provider>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        )
    }
}
