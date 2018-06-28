import React, { Component } from "react";
import { connect } from "react-redux";
import {
  counterFetchCount,
  counterUpdateCount
} from "../../redux/modules/counter";

export class Counter extends Component {
  componentDidMount() {
    this.props.counterFetchCount();
  }
  incrementCount = () => {
    this.props.counterUpdateCount("INCREMENT");
  };
  decrementCount = () => {
    this.props.counterUpdateCount("DECREMENT");
  };
  resetCount = () => {
    this.props.counterUpdateCount("RESET");
  };
  render() {
    return (
      <div className="counter app-wrapper">
        <h2>{this.props.count}</h2>
        <br />
        <button className="decrement" onClick={this.decrementCount}>
          {" "}
          decrement (-){" "}
        </button>
        <br />
        <button className="increment" onClick={this.incrementCount}>
          {" "}
          increment (+){" "}
        </button>
        <br />
        <button className="reset" onClick={this.resetCount}>
          {" "}
          reset{" "}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  counterFetchCount: () => dispatch(counterFetchCount()),
  counterUpdateCount: type => dispatch(counterUpdateCount(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
