import React from 'react';
import './Register.style.css';
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";
import {Link} from 'react-router-dom';

class Register extends React.Component{

    constructor(props) {
        super(props);
        

        this.state = {
            username:"",
            password:"",
            sessionUser:null,
            click:false
        }
        
    }
    
    componentWillMount(){
        document.body.className = "register";
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

    handleRegistration = event => {
        event.preventDefault();
        var newUser = {
            username: this.state.username.trim(),
            password: this.state.password.trim()
        }
       
        if(newUser.username && newUser.password){
            
            this.setState({
                click:true
            },()=>{
                UserService.registerUser(newUser).then(
                    user => this.setState({
                        sessionUser: user
                }))
            })
        }  
      };

    render(){
        var error="Username aleady taken. Please try a different username.";
        return(
              <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 mt-5">
                        <div className="text-center">
                            <img src="../images/brand-icon-lg.png" alt="brand-icon"/>
                        </div>
                        <h2 className="text-center">COURSE MANAGEMENT : SIGN UP</h2>

                        <form className="signup-form">
                        {this.state.click && this.state.sessionUser===null?
                            <div className="row">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="alert alert-danger" role="alert">
                                       {error}
                                    </div>
                                </div>
                           </div>:""}
                            <div className="form-group row">
                                <label htmlFor="usernameReg"
                                    className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                        value={this.state.username}
                                        name="username"
                                        id="usernameReg"
                                        placeholder="Alice"
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="passwordReg"
                                    className="col-sm-2 col-form-label">
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                        className="form-control"
                                        id="passwordReg"
                                        placeholder="123qwe#$%"
                                        value={this.state.password} 
                                        name="password"
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="verifyPasswordReg"
                                    className="col-sm-2 col-form-label">
                                    Verify Password
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                        className="form-control"
                                        id="verifyPasswordReg"
                                        placeholder="123qwe#$%"
                                        name="repassword"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <div className="row mb-3">
                                        <div className="col-sm-8 mb-md-0 mb-3">
                                            <a href="../profile/profile.template.client.html"
                                               className="btn btn-success btn-block"
                                               onClick={this.handleRegistration}>
                                                Sign Up
                                            </a>
                                        </div>
                                        <div className="col-sm-4">
                                          <Link to="/"
                                            className="btn btn-danger btn-block">
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row signup-misc-links">
                                        <div className="col-6">
                                            <Link to={`/login`} className="float-left">
                                                    Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
               </div>
               {this.state.sessionUser ? <Redirect to="/course/table" /> : null }
           </div>
      
        )
    }
}

export default Register;