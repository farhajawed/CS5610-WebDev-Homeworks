import React from 'react';
import './Profile.style.css';
import UserService from "../services/UserService";
import {Link} from 'react-router-dom';
import CourseAdd from './CourseAdd';


class Profile extends React.Component{

    constructor(props) {
        super(props)
      
        this.state = {
            password:'',
            email:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            sessionUser:{},
            save:false
        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
             [name]: value
        });
    };

    componentDidMount=()=>
         UserService.findUserInSession().then(
            user => this.setState({
                sessionUser: user,
                password:user.password||"",
                email:user.email|"",
                firstName:user.firstName||"",
                lastName:user.lastName||"",
                phoneNumber:user.phoneNumber||"",
                save:false
            })
        )
    

    componentWillMount(){
        document.body.className = "profile";
    }
    
    componentWillUnmount(){
        document.body.className = null;
    }

    handleUpdate = () => {
        var updatedUser = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            password: this.state.password,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber
        }
       
        UserService.updateUser(updatedUser,this.state.sessionUser.id).then(
            user => this.setState({
                sessionUser: user
        },()=>
        {
            this.setState({
                save:true
            })
            console.log(user)
        }))
         
      };


    render(){
        return( 
        <div className="container">
                <CourseAdd profile={true}/>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="text-center">
                            <img src="../images/edit-profile.png" alt="icon"/>
                        </div>
                        <h2 className="text-center">PROFILE : {this.state.sessionUser.username}</h2>
                        <form className="profile-update-form mb-3">
                            {this.state.save?
                            <div className="row">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="alert alert-success" role="alert">
                                        Profile successfully saved!
                                    </div>
                                </div>
                            </div>:""}
                            <div className="form-group row">
                                <label htmlFor="usernamePro"
                                    className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        className="form-control"
                                        id="usernamePro"
                                        placeholder={this.state.sessionUser.username} 
                                        name="username"
                                        disabled/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="passwordPro"
                                    className="col-sm-2 col-form-label">
                                    Password
                                </label>
                                <div className="col-sm-10">
                                    <input type="password"
                                        className="form-control"
                                        id="passwordPro"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="emailPro"
                                    className="col-sm-2 col-form-label">
                                        Email
                                </label>
                                <div className="col-sm-10">
                                    <input type="email"
                                        className="form-control"
                                        id="emailPro"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="emailPro"
                                    className="col-sm-2 col-form-label">
                                        First Name
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        className="form-control"
                                        id="firstNamePro"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lastNamePro"
                                    className="col-sm-2 col-form-label">
                                        Last Name
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        className="form-control"
                                        id="lastNamePro"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phonePro"
                                    className="col-sm-2 col-form-label">
                                    Phone
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        className="form-control"
                                        id="phonePro"
                                        name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <div className="row">
                                        <div className="col-12">
                                            <a className="btn btn-success btn-block mb-3" onClick={this.handleUpdate}>
                                                Update
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <Link to="/course/table"
                                            className="btn btn-danger btn-block">
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        )
    }
}

export default Profile;