import React from 'react'
import CourseService from "../services/CourseService";

class TopicPill extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            topic: this.props.topic,
            title: this.props.topic.title,
            isEdit : false
        }
    }

    editTopic=(isEdit)=>{
        this.setState({
            isEdit:isEdit
        });

        var topic = this.state.topic;
        topic.title = this.state.title;
   
        CourseService.updateTopic(this.props.topic.id,topic)
        .then(topic => 
                this.setState({
                    topic: topic,
                    title:topic.title
    }))}

    formChanged = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render(){
        return(
            !this.state.isEdit?
              <li className="nav-item mr-2 mb-2">
                    <a className={this.props.selected ? "nav-link active":"nav-link"}>
                        <span onClick={() => this.props.selectTopic(this.state.topic)} 
                              className="click-title">
                              {this.state.title}
                        </span>
                        <i className="fa fa-times float-right mt-1 click-title" 
                            onClick={() => this.props.deleteTopic(this.props.topic.id)}>
                        </i>
                        <i class="fa fa-edit float-right mt-1 mr-2 ml-3 click-title"
                           onClick={() => this.setState({isEdit:true})}></i>
                    </a>
             </li> 
             :
             <li className="nav-item mr-2 mb-2 form-inline">
                    <input type="text"
                            className="form-control mr-1"  
                            value={this.state.title}
                            onChange={this.formChanged} />
                    <button type="submit" 
                            className="btn btn-success"
                            onClick={() => this.editTopic(false)}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button type="submit" 
                           className="btn btn-danger mr-2"
                           onClick={() => this.setState({isEdit:false})}>
                        <i class="fa fa-times"></i>
                    </button>
            </li>
        )
    }
}
 


export default TopicPill