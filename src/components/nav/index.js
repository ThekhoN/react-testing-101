import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Apps</Link>
      </nav>
    );
  }
}
