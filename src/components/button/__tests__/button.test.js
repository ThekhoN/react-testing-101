import React from "react";
import renderer from "react-test-renderer";
import Button from "../index";
import { shallow, mount } from "enzyme";

const mock = jest.fn();
const clickHandler = new mock();

describe("Button", () => {
  let clickHandler, wrapper;
  beforeEach(() => {
    clickHandler = jest.fn();
    wrapper = shallow(<Button label="click" clickHandler={clickHandler} />);
  });

  // snapshot testing
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Button label="click" clickHandler={clickHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test events (passedProp)
  // clickHandler is a passedProp
  it("calls clickHandler on click", () => {
    wrapper.find("button").simulate("click");
    expect(clickHandler).toHaveBeenCalled();
  });

  // test events (ownMethod)
  // onHoverOn is an own method
  it("calls onHoverOn onMouseEnter", () => {
    const mountedWrapper = mount(
      <Button label="click" clickHandler={clickHandler} />
    );
    const instance = mountedWrapper.instance();
    const spyOnHoverOn = jest.spyOn(instance, "onHoverOn");
    instance.forceUpdate();
    mountedWrapper.find("button").simulate("mouseenter");
    expect(spyOnHoverOn).toHaveBeenCalled();
  });

  // test state change on event
  // onHoverOn state.hovered === true ???
  it("updates state.hovered to true on mouseenter event", () => {
    wrapper.find("button").simulate("mouseenter");
    expect(wrapper.state().hovered).toEqual(true);
    expect(wrapper.state().hovered).toBe(true);
  });

  // test state change on calling own method
  // onHoverOn state.hovered === true ???
  it("updates state.hovered to true on calling own method onHoverOn", () => {
    const _wrapper = shallow(
      <Button label="click" clickHandler={clickHandler} />
    );
    const instance = _wrapper.instance();
    expect(wrapper.state().hovered).toBe(false);
    instance.onHoverOn();
    expect(wrapper.state().hovered).toBe(false);
  });
});
