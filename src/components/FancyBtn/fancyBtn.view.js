import React , { Component } from 'react';
import './fancyBtn.css';

class FancyBtn extends Component {

  render() {
    const style = {
      backgroundColor: this.props.color
    };

    return (
      <button style={ style } onClick={ this.props.onClick } className="FancyBtn">
        { this.props.text }
      </button>);
  }
}

export default FancyBtn;
