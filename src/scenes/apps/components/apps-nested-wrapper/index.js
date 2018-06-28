import React, { Component } from "react";
import Todo from "../../../../components/todo";
import Counter from "../../../../components/counter";

export default class AppsNestedWrapper extends Component {
  renderNesetedContent = () => {
    const { match } = this.props;
    const { url } = match;
    switch (url) {
      case "/apps/counter":
        return <Counter />;
      case "/apps/todo":
        return <Todo />;
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="apps-nested-wrapper">{this.renderNesetedContent()}</div>
    );
  }
}
