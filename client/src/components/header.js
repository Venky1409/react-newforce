import React, { Component } from 'react';
import './header.css';
import {
  NavLink
} from 'react-router-dom';

class Headers extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink to="/" exact><span className="navbar-brand">Newforce Ltd</span></NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink to="/" exact activeStyle={ {color: "red"} }>Home</NavLink></li>
              <li><NavLink to="/payroll" exact activeStyle={ {color: "red"} }>Payroll</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="footer">
        <p className="footer-text">&copy; Newforce Global Services. Abhinav Vemula</p>
      </div>
      </React.Fragment>
    )
  }
}

export default Headers;
