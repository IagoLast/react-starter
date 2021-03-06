import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './index.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>The total count is:
          { ' ' +  this.props.number }
        </p>
        <Link to="/counter"> Go to the click counter</Link>
      </div>
      );
  }
}

export default Index;
