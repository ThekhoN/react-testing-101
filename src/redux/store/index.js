import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../modules";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

export const history = createBrowserHistory();
const routerMiddlewareFn = routerMiddleware(history);

let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {};

export const configureStore = defaultState => {
  return createStore(
    connectRouter(history)(rootReducer),
    defaultState,
    composeEnhancers(applyMiddleware(thunk, routerMiddlewareFn))
  );
};

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancers(applyMiddleware(thunk, routerMiddlewareFn))
);

export default store;
