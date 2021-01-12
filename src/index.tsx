import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import LoadingIndicator from "./lib/LoadingIndicator";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import "./i18n";

// https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = lazy(() => import("./App"));
const Hello = lazy(() => import("./Hello"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingIndicator title="Loading..." />}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/hello" component={Hello} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
