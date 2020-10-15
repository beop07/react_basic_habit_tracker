import React, { Component } from 'react';

class Nav extends Component{
  render(){
    return (
      <header className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.total}</span>
      </header>
    );
  }
}

export default Nav;