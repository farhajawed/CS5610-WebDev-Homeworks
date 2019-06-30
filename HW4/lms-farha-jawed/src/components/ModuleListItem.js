import React from 'react'

export default class ModuleListItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.module.title,
            isEdit : false
        }
    }

    editModule=(isEdit)=>{
        this.setState({
            isEdit:isEdit
        });
        this.props.updateModule(this.props.module.id, this.state.title);
    }

    formChanged = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render(){
        return(   
         !this.state.isEdit?
           <a className={this.props.selected ? 'nav-link active mr-2 mb-3': 'nav-link mr-2 mb-3'}>
                <span onClick={() => this.props.selectModule(this.props.module)} className="click-title">
                        {this.props.module.title}
                </span>
                <i className="fa fa-times float-right mt-1 click-title" 
                    onClick={() => this.props.deleteModule(this.props.module.id)}>
                </i>
                <i className="fa fa-edit float-right mt-1 mr-3 click-title"
                   onClick={() => this.setState({isEdit:true})}>
                </i>
           </a>:
           <a className="nav-link mr-2 mb-2">
                <div className="row">
                    <div className="col-6 col-md-8">
                        <input className="form-control"
                                type="text"
                                value={this.state.title}
                                onChange={this.formChanged}/>
                    </div>
                    <div className="col-3 col-md-2">
                        <button className="btn btn-info" 
                                type="submit"
                                onClick={() => this.editModule(false)}>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                    <div className="col-3 col-md-2">
                        <button className="btn btn-danger" 
                                type="submit"
                                onClick={() => this.setState({isEdit:false})}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
             </a>
        )
    }
}