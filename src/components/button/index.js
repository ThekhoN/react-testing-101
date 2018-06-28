import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  state = {
    hovered: false
  };
  onHoverOn = () => {
    this.setState({
      hovered: true
    });
  };
  onHoverOff = () => {
    this.setState({
      hovered: false
    });
  };
  render() {
    const { label, clickHandler } = this.props;
    return (
      <button
        className={`button is-hovered--${this.state.hovered}`}
        onMouseEnter={this.onHoverOn}
        onMouseLeave={this.onHoverOff}
        onClick={clickHandler}
      >
        {label}
      </button>
    );
  }
}

export default Button;
