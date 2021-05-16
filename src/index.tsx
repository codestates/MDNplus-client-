import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

library.add(faSearch, faTimes, faSortDown, faSortUp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
