import React from "react";
import ConnectedCounter, { Counter } from "../index";
import { mount, render } from "enzyme";

// test Counter (unconnected)
describe("Counter", () => {
  let count, counterFetchCount, counterUpdateCount, mountedWrapper;
  beforeEach(() => {
    count = 0;
    counterFetchCount = jest.fn();
    counterUpdateCount = jest.fn();
    mountedWrapper = mount(
      <Counter
        count={count}
        counterFetchCount={counterFetchCount}
        counterUpdateCount={counterUpdateCount}
      />
    );
  });

  it("calls this.props.counterFetchCount on CDM", () => {
    expect(counterFetchCount).toHaveBeenCalled();
  });

  it("displays this.props.count inside H2", () => {
    const h2 = mountedWrapper.find("h2");
    expect(h2.text()).toBe("0");
  });

  it("calls this.props.counterUpdateCount with type==='INCREMENT' on click increment button", () => {
    mountedWrapper.find("button.increment").simulate("click");
    expect(counterUpdateCount).toHaveBeenCalledWith("INCREMENT");
  });

  it("calls this.props.counterUpdateCount with type==='DECREMENT' on click decrement button", () => {
    mountedWrapper.find("button.decrement").simulate("click");
    expect(counterUpdateCount).toHaveBeenCalledWith("DECREMENT");
  });

  it("calls this.props.counterUpdateCount with type==='RESET' on click reset button", () => {
    mountedWrapper.find("button.reset").simulate("click");
    expect(counterUpdateCount).toHaveBeenCalledWith("RESET");
  });
});
