import React from 'react';
import './CourseTable.style.css';
import UserService from "../services/UserService";
import {Link} from 'react-router-dom';

class CourseAdd extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
            title: '',
            sessionUser:{}
        }
    }

    componentDidMount=()=>
        UserService.findUserInSession().then(
            user => this.setState({
                sessionUser: user
            })
        )
    

    updateForm = event =>
        this.setState({
            title: event.target.value.trim()
    })

    handleLogout=()=>{
        UserService.logout();
    }

    render(){
        return(
             <nav className="navbar fixed-top navbar-light custom-navbar">
                <button className="navbar-toggler mr-2"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mr-auto d-none d-sm-block">
                    <img src="/images/brand-icon.png" alt="brand-icon"/>Course Manager
                </a>
                {!this.props.profile?
                <div className="form-inline custom-form mr-auto">
                    <input className="form-control mr-sm-2"
                        type="text"
                        id="navBarSearchForm"
                        onChange={this.updateForm}
                        placeholder="New Course Title"/>
                    <button className="btn btn-danger new-course-btn"
                            type="submit"
                            onClick={() => this.props.addCourse({
                                  title: this.state.title
                            })}>
                          <i className="fa fa-plus"></i>
                    </button>
                </div>:""}

                <div className="collapse navbar-collapse"
                    id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <ul className="navbar-nav">
                            <li className={this.props.home? "nav-item active":"nav-item"}>
                                <Link to="/course/table" className="nav-link">Home</Link>
                            </li>
                            <li className={this.props.profile? "nav-item active":"nav-item"}>
                                <Link to="/profile" className="nav-link">{this.state.sessionUser.username}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" onClick={this.handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </ul>
                </div>
           </nav>
        )
    }
}
   

export default CourseAdd;

