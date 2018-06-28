import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class AppsNav extends Component {
  render() {
    const { match } = this.props;
    return (
      <nav className="apps-nav">
        <Link to={`${match.url}/counter`}>Counter</Link>
        <Link to={`${match.url}/todo`}>Todo</Link>
      </nav>
    );
  }
}
