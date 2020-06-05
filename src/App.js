import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import ContainerDiv from './components/layout/ContainerDiv';
// import { Container } from 'react-bootstrap'
import './App.css';
import Home from './components/Home';
import Student from './components/Student';
import Monitor from './components/Monitor';
import End from './components/End';
import NoMatch from './components/NoMatch';




class App extends Component {
  render(){
    return (
      <React.Fragment> 
        <Router>
        <NavigationBar/>
          <ContainerDiv>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Student" component={Student}/>  
              <Route path="/End" component={End}/>            
              <Route path="/Monitor" component={Monitor}/>   
              <Route component={NoMatch}/>     
            </Switch> 
          </ContainerDiv>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
