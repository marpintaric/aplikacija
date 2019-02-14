import React, { Component } from 'react';
import login from './components/login';
import {BrowserRouter  as Router, Route} from 'react-router-dom';

import './App.css';
import registration from './components/registration';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={login}/>
        <Route path="/login" component={login}/>
        <Route path="/register" component={registration} />
        </div>
      </Router>
      
    );
  }
}

export default App;
