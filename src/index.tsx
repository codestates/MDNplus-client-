import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as fasFaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farFaThumbsUp } from "@fortawesome/free-regular-svg-icons";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/index";

const store = createStore(rootReducer);

library.add(faSearch, faTimes, faSortDown, faSortUp, fasFaThumbsUp, farFaThumbsUp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
