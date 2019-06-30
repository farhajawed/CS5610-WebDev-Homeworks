import React from 'react'
import TopicPill from "./TopicPill";
import CourseService from "../services/CourseService";

class TopicPills extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            newTopicTitle: 'New Topic',
            topics: []
        }
    }

  
    componentDidUpdate(prevPros) {
        if(prevPros.lesson.id !== this.props.lesson.id) {
         CourseService.findTopic(this.props.lesson.id)
            .then(topics => (this.setState({
              topics: topics
    })))}}    
        

    formChanged = (event) => {
        this.setState({
            newTopicTitle: event.target.value
        })
    }

    addNewTopic = () => {
        var newTopic={
            title: this.state.newTopicTitle
        }
        CourseService.createTopic(this.props.lesson.id,newTopic).then(
            topics =>this.setState({
                    topics: topics
            },()=>{
                if(this.state.topics.length===1){
                    this.props.selectTopic(this.state.topics[0])
                }
            }))
    }

    deleteTopic = (topicId) =>{
        CourseService.deleteTopic(topicId)
          .then(topics => {
            return (this.setState({
                    topics: topics})
        )})
    }


    render(){
        return(
            <ul className="nav nav-pills topic-pill-list">
                {
                    this.state.topics.length>0
                    ?
                    this.state.topics.map((topic) =>
                        <TopicPill
                            selected={this.props.selectedTopic.id===topic.id}
                            selectTopic={this.props.selectTopic}
                            deleteTopic={this.deleteTopic}
                            topic={topic}
                            key={topic.id}/>
                    ):""
                }

                <li className="nav-item mr-2 mb-2 form-inline">
                    <input type="text"
                            className="form-control mr-1 col-6"  
                            placeholder="New Topic"
                            onChange={this.formChanged} />
                    <button type="submit" 
                            className="btn btn-success"
                            onClick={this.addNewTopic}>
                        <i className="fa fa-plus"></i>
                    </button>
                </li>
            </ul>            
        )
    }
}
   

export default TopicPills