import React from 'react';
import CourseTable from '../components/CourseTable';
import CourseGrid from '../components/CourseGrid';
import CourseEditor from "../components/CourseEditor";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import {BrowserRouter as Router, Route} from 'react-router-dom'


class Whiteboard extends React.Component{
     
    render(){
        return(
             <div>
                <Router>
                   <div>
                        <Route exact path="/"
                            render={() =><Register/>}/>

                        <Route exact path="/login"
                            render={() =><Login/>}/>
                            
                        <Route exact path="/course/table"
                                render={() =><CourseTable />}/>
                        <Route exact path="/course/grid"
                                render={() =><CourseGrid />}/>     

                        <Route exact path="/profile"
                                render={() =><Profile/>}/>  

                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor {...props}/>}
                            path="/course/:courseId/edit"/>
                     </div>
                 </Router>
             </div>
        )
    }
}

export default Whiteboard;