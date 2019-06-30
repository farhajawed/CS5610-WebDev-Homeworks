import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService";

class ModuleList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            newModuleTitle: 'New Module',
            modules: []
        }
    }
  
    componentDidUpdate(prevPros) {
        if(prevPros.courseId !== this.props.courseId) {
         CourseService.findModule(this.props.courseId)
            .then(modules => this.setState({
              modules: modules
            }))
        }
      }
      
    formChanged = (event) => {
        this.setState({
            newModuleTitle: event.target.value
        })
    }

   

    addNewModule = () => {
        var newModule={
            title: this.state.newModuleTitle
        }
        CourseService.createModule(this.props.courseId,newModule).then(
            modules =>this.setState({
                    modules: modules
            },()=>{
                if(this.state.modules.length===1){
                    this.props.selectModule(this.state.modules[0])
                }
            }))
        
    }

    deleteModule = (moduleId) => {
        CourseService.deleteModule(moduleId)
          .then(modules => this.setState({
                    modules: modules
            }))
     }

    render(){
        return(
            <div className="col-md-3 module-list text-center">
                <ul className="nav flex-column nav-pills module-list-pill">
                
                  {
                    this.state.modules!==undefined?
                    this.state.modules.map((module) =>
                        <ModuleListItem
                            selected={this.props.selectedModule.id === module.id}
                            selectModule={this.props.selectModule}
                            deleteModule = {this.deleteModule}
                            key={module.id}
                            module={module}/>
                     ):""
                   }
                    <a className="nav-link mr-2">
                        <div className="row">
                            <div className="col-9 col-md-10">
                                <input className="form-control"
                                       type="text"
                                       placeholder="New Module"
                                       onChange={this.formChanged}/>
                            </div>
                            <div className="col-3 col-md-2">
                                <button className="btn btn-success" 
                                        type="submit"
                                        onClick={this.addNewModule}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </a>
                </ul>
           </div>
        )
    }
}

     

export default ModuleList