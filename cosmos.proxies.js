import createReduxProxy from "react-cosmos-redux-proxy";
import { configureStore } from "./src/redux/store";

const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
});

export default [ReduxProxy];
