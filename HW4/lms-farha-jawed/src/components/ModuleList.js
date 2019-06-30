import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            newModuleTitle: 'New Module',
            modules: this.props.modules 
        }
    }
  
    formChanged = (event) => {
        this.setState({
            newModuleTitle: event.target.value
        })
    }

    addNewModule = () => {
        let modules = this.props.modules;
        modules.push({
            id:(new Date()).getTime()+'',
            title: this.state.newModuleTitle
        })
        this.setState({
            modules: modules
        })
    }



    render(){
        return(
            <div className="col-md-3 module-list text-center">
                <ul className="nav flex-column nav-pills module-list-pill">
                
                  {
                    this.props.modules!==undefined?
                    this.props.modules.map((module, index) =>
                        <ModuleListItem
                            selected={this.props.selectedModule === module}
                            selectModule={this.props.selectModule}
                            deleteModule={this.props.deleteModule}
                            updateModule={this.props.updateModule}
                            key={index}
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