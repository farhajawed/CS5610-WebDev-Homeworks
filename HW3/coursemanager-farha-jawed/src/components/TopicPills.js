import React from 'react'
import TopicPill from "./TopicPill";

class TopicPills extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            newTopicTitle: 'New Topic',
            topics: this.props.topics
        }
    }
  
    formChanged = (event) => {
        this.setState({
            newTopicTitle: event.target.value
        })
    }

    addNewTopic = () => {
        console.log(this.state.topics);
        let topics = this.props.topics;
        topics.push({
            id:(new Date()).getTime()+'',
            title: this.state.newTopicTitle
        })
        this.setState({
            topics:topics
        })
    }

    deleteTopic = (topic) =>{
        var index = -1;
        let topics = this.props.topics;
        for(var i = 0; i<topics.length; i++){
            console.log(topic.id, topics.id);
            if(topics[i].id === topic.id){
                index = i;
                break;
            }
        }
        topics.splice(index, 1);
        this.setState({
            topics: topics
        })
    }

    updateTopic = (id,title) =>{
        var index = -1;
        let topics = this.props.topics;
        for(var i = 0; i<topics.length; i++){
            if(topics[i].id === id){
                index = i;
                break;
            }
        }
        topics[index].title = title;
        this.setState({
            topics: topics
        })
    }

    render(){
        return(
            <ul className="nav nav-pills topic-pill-list">
                {
                    this.props.topics!==undefined?
                    this.props.topics.map((topic, index) =>
                        <TopicPill
                            selected={this.props.selectedTopic===topic}
                            selectTopic={this.props.selectTopic}
                            deleteTopic={this.deleteTopic}
                            updateTopic={this.updateTopic}
                            topic={topic}
                            key={index}/>
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