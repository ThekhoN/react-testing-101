import React from "react";
import Counter from "../index";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const ConnectedCounter = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default {
  component: ConnectedCounter
};
