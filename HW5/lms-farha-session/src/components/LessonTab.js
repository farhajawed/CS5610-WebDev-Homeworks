import React from 'react';
import CourseService from "../services/CourseService";

class LessonTab extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            lesson: this.props.lesson,
            title:this.props.lesson.title,
            isEdit : false
        }
    }

    editLesson=(isEdit)=>{
        this.setState({
            isEdit:isEdit
        });

        var lesson = this.state.lesson;
        lesson.title = this.state.title;
   
        CourseService.updateLesson(this.props.lesson.id,lesson)
        .then(lesson => 
                this.setState({
                    lesson: lesson,
                    title:lesson.title
      }))}

    formChanged = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    render(){
        return(
          !this.state.isEdit?
           <li className={this.props.selected ? "nav-item active mb-1 mt-1" : "nav-item mb-1 mt-1"}>
                <a className="nav-link">
                    <span onClick={() => this.props.selectLesson(this.state.lesson)} className="click-title"> 
                        {this.state.title}
                    </span>
                    <i className="fa fa-times float-right mt-1 click-title" 
                    onClick={() => this.props.deleteLesson(this.props.lesson.id)}>
                    </i>
                    <i class="fa fa-edit float-right mt-1 ml-3 mr-2 click-title"
                       onClick={() => this.setState({isEdit:true})}></i>
                </a>
          </li>
          :
          <div className="form-inline">
                <input type="text"
                        className="form-control"  
                        value={this.state.title}
                        onChange={this.formChanged} />
        
                <button type="submit" 
                        className="btn btn-info"
                        onClick={() => this.editLesson(false)}>
                    <i className="fa fa-check"></i>
                </button>
                <button type="submit" 
                        className="btn btn-danger mr-2"
                        onClick={() => this.setState({isEdit:false})}>
                    <i class="fa fa-times"></i>
                </button>          
          </div>
        )
    }
}
 
                
export default LessonTab