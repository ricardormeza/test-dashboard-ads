import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Login from './components/Login';
import Perfil from './components/Perfil';
import React, { Component } from "react";

function App(){
     return (
       <Router basename={window.location.pathname || ""}>
           <div>
               <ul>
                   <li>
                    <Link to="/">Login</Link>
                   </li>
                   <li>
                   <Link to="/perfil">perfil</Link>
                   </li>
               </ul>
               <hr/>
           
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/Perfil">
                    <Perfil/>
                </Route>  
            </Switch>
        </div>
        </Router>
     );
    
   }
 

export default App;
