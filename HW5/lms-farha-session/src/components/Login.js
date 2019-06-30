import React from 'react';
import './Login.style.css';
import CourseService from "../services/CourseService";
import {Link} from 'react-router-dom';
import {Redirect} from "react-router-dom";

class Login extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            username:"",
            password:"",
            sessionUser:{}
        }
        
    }
    
    componentWillMount(){
        document.body.className = "login";
    }
    
    componentWillUnmount(){
        document.body.className = null;
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
             [name]: value
        });
    };

    handleLogin = () => {
        var loginUser = {
            username: this.state.username.trim(),
            password: this.state.password.trim()
        }
       
        if(loginUser.username && loginUser.password){
            CourseService.login(loginUser).then(
                user => this.setState({
                    sessionUser: user
            }))
        }  
      };


    render(){
        return(
           <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 mt-5">
                        <div className="text-center">
                            <img src="../images/brand-icon-lg.png" alt="brand"/>
                        </div>

                        <h2 className="text-center">COURSE MANAGEMENT : SIGN IN</h2>
                        <form className="login-form">
                            <div className="form-group row">
                                <label for="username"
                                    className="col-sm-2 col-form-label">
                                        Username
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                        id="username"
                                        placeholder="Alice"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        name="username"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password"
                                    className="col-sm-2 col-form-label">
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="123qwe#$%"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <div className="row mb-3">
                                        <div className="col-8">
                                            <a className="btn btn-success btn-block"
                                                onClick={this.handleLogin}>Sign in</a>
                                        </div>
                                        <div className="col-4">
                                           <Link to="/login"
                                             className="btn btn-danger btn-block">
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row login-misc-links">
                                        <div className="col-6">
                                            <a>Forgot Password?</a>
                                        </div>
                                        <div className="col-6">
                                            <Link to={`/`} className="float-right">
                                                    Sign Up
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
            {this.state.sessionUser.id ? <Redirect to="/course/table" /> : null }
       </div>
        )
    }
}

export default Login;