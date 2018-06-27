import React, { Component } from "react";

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
