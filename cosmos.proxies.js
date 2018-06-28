import createReduxProxy from "react-cosmos-redux-proxy";
import createRouterProxy from "react-cosmos-router-proxy";
// We can import app files here
import { configureStore } from "./src/redux/store";

// Read more about configuring Redux in the Redux proxy section below
const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
});

// We ensure a specific proxy order
export default [
  // Not all proxies have options, and often relying on defaults is good enough
  //   createFetchProxy(),
  ReduxProxy
  //   createRouterProxy()
];
