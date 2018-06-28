import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Scenes from "./scenes";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Scenes />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
