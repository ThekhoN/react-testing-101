import React, { Component } from "react";
import Button from "./components/button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          label="click me"
          clickHandler={() => {
            console.log("was clicked!");
          }}
        />
      </div>
    );
  }
}

export default App;
