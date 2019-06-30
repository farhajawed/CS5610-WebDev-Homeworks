import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import './CourseEditor.style.css';
import {Link} from 'react-router-dom'
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import widgets from '../reducers/WidgetReducer';
import WidgetListContainer from '../containers/WidgetListContainer';

const store = createStore(widgets)


export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;
        const course = CourseService.findCourseById(courseId).then(course=>course);

        this.state={
            isEdit:false,
            course:course,
            title:course.title
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
                selectedModule: {},
                selectedLesson: {},
                selectedTopic: {}
            }

        }    
    }   

    componentDidMount(){
        CourseService.findCourseById(this.props.match.params.courseId).then((course)=>{
                this.setState({
                    course:course,
                    title:course.title,
                    selectedModule:course.modules[0]||{}
                },()=>{
                
                    if(this.state.selectedModule.title!==undefined){
                        this.setState({
                            selectedLesson:course.modules[0].lessons[0]||{}
                        },()=>{
                            if(course.modules[0].lessons[0]!==undefined){
                            this.setState({
                                selectedTopic:course.modules[0].lessons[0].topics[0]||{}
                            })}
                        })
                    }
                })
         })      
    }

    selectModule = module =>{
        ModuleService.findModuleByMid(module.id)
        .then(module =>  this.setState({
            selectedModule: module
           },()=>{
            if(this.state.selectedModule.lessons.length>0){
                this.selectLesson(this.state.selectedModule.lessons[0]);
            }
            else{
                this.setState({
                    selectedLesson:{}
            })}
           }))

     }

    selectLesson = lesson =>{
        this.setState({
            selectedLesson: lesson
        })
        if(lesson.topics.length>0){
            this.selectTopic(lesson.topics[0]);
        }
    }
        
    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
    })

    
    editCourse=(isEdit)=>{
        let course = this.state.course;
        course.title = this.state.title;
        this.setState({
            isEdit:isEdit
        });
        CourseService.updateCourse(this.props.match.params.courseId,course)
        .then(course => this.setState({
                  course: course,
                  title:course.title
          }))
    }
        
    formChanged = (event) => {
        this.setState({
            title: event.target.value
        })
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

                    <span className="navbar-brand mr-md-5">
                        <Link to="/course/table" className="mr-2 mt-1">
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
                        module={this.state.selectedModule}/>          
                </nav>    
                
                <div className="container-fluid widget-container">
                    <div className="row">
                     
                        <ModuleList courseId={this.state.course.id}
                                    selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}/>
                       
                        <div className="col-md-9 topic-list">
                            <div className="row">
                                <div className="col-md-12">
                                    <TopicPills
                                        selectTopic={this.selectTopic}
                                        selectedTopic={this.state.selectedTopic}
                                        lesson={this.state.selectedLesson}/>
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
    