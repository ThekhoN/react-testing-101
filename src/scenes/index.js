import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "../components/nav";
import Home from "../scenes/home";
import Apps from "../scenes/apps";
import "./style.css";

export default class Scenes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="scenes">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apps" component={Apps} />
            {/*   SHOW THIS BY DEFAULT    */}
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
