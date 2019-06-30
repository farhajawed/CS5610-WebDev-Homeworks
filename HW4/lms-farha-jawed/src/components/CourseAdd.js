import React from 'react';
import './CourseTable.style.css';

class CourseAdd extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value.trim()
    })

    render(){
        return(
             <nav className="navbar fixed-top navbar-light custom-navbar">
                <button className="navbar-toggler mr-2"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand d-none d-sm-block">
                    <img src="/images/brand-icon.png" alt="brand-icon"/>Course Manager
                </a>

                <div className="form-inline custom-form mr-auto">
                    <input className="form-control mr-sm-2"
                        type="text"
                        id="navBarSearchForm"
                        onChange={this.updateForm}
                        placeholder="New Course Title"/>
                    <button className="btn btn-danger new-course-btn"
                            type="submit"
                            onClick={() => this.props.addCourse({
                                  id: (new Date()).getTime() + '',
                                  title: this.state.title
                            })}>
                          <i className="fa fa-plus"></i>
                    </button>
                </div>

                <div className="collapse navbar-collapse"
                    id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Alice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Signup</a>
                            </li>
                        </ul>
                    </ul>
                </div>
           </nav>
        )
    }
}
   

export default CourseAdd;

