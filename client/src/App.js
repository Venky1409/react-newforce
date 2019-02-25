import React, { Component } from 'react';
import './App.css';
import Headers from './components/header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Payroll from './components/Payroll';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Headers />
        <Route path="/" exact strict render={
          () => {
          return (<Home/>);
          }
        }/>
        <Route path="/payroll" exact strict render={
          () => {
          return (<Payroll/>);
          }
        }/>
      </div>
    </Router>
    );
  }
}

export default App;
