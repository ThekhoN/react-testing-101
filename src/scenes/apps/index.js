import React, { Component } from "react";
import AppsNav from "./components/apps-nav";
import AppsNestedWrapper from "./components/apps-nested-wrapper";
import { Route } from "react-router-dom";
import "./style.css";

export default class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="scene">
        <h2>Apps</h2>
        <p>Choose an App:</p>
        <AppsNav match={match} />
        <Route path={`${match.url}/:subdomain`} component={AppsNestedWrapper} />
      </div>
    );
  }
}
